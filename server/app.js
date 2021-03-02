import express, { Router } from 'express';
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

const { PRODUCTION, TEST } = constants.envTypes;

// eslint-disable-next-line no-unused-vars
const debug = Debug('server');

const app = express();

// allow subdirectory
const _app = Router();

// TODO:SETUP SENTRY SETUP
app.use(Sentry.Handlers.requestHandler());
app.use(logger('dev'));

if (config.common.env === PRODUCTION) {
  _app.use(
    helmet({
      contentSecurityPolicy: false,
      dnsPrefetchControl: { allow: true },
      referrerPolicy: { policy: 'strict-origin' },
    }),
  );
  _app.use(requireHTTPS);
}

_app.use(express.json());
_app.use(express.urlencoded({ extended: false }));
_app.use(cookieParser());

_app.use('/api', router);

if (config.common.env === PRODUCTION) {
  _app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  _app.use(
    favicon(path.join(__dirname, '..', 'client', 'build', 'favicon.ico')),
  );

  _app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(process.env.PUBLIC_URL, _app);

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

// eslint-disable-next-line no-unused-vars
app.use((err, _, res, next) => {
  let error = err;
  if (!Boom.isBoom(err)) {
    error = Boom.badImplementation(err.message);
  }
  const { statusCode, payload } = error.output;

  if (config.common.env !== TEST) {
    console.log(err);
  }

  return res.status(statusCode).json({
    ...error.data,
    ...payload,
  });
});

export default app;
