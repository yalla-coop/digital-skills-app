import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import logger from 'morgan';
import Debug from 'debug';
import helmet from 'helmet';
import Boom from '@hapi/boom';

import { Sentry } from './services/error-handler';

import router from './api';
import config from './config';
import * as constants from './constants';
import { requireHTTPS } from './api/middlewares';

const { PRODUCTION } = constants.envTypes;

// eslint-disable-next-line no-unused-vars
const debug = Debug('server');

const app = express();

// TODO:SETUP SENTRY SETUP
app.use(Sentry.Handlers.requestHandler());
app.use(logger('dev'));

if (config.common.env === PRODUCTION) {
  app.use(
    helmet({
      contentSecurityPolicy: false,
      dnsPrefetchControl: { allow: true },
      referrerPolicy: { policy: 'strict-origin' },
    }),
  );
  app.use(requireHTTPS);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', router);

if (config.common.env === PRODUCTION) {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  app.use(favicon(path.join(__dirname, '..', 'client', 'build', 'tempo.png')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(
  Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
      // ignore non server errors
      if (error.output && error.output.statusCode < 500) {
        return false;
      }
      return true;
    },
  }),
);

app.use((err, _, res, next) => {
  if (Boom.isBoom(err)) {
    const { statusCode, payload } = err.output;

    return res.status(statusCode).json({
      ...payload,
      ...err.data,
    });
  }

  const error = Boom.badImplementation(err.message);
  res.status(500).json(error);

  return next(err);
});

export default app;
