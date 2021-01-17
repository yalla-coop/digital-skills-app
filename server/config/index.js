import dotenv from 'dotenv';
import common from './common';
import server from './server';
import database from './database';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// load .env in local development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

try {
  common();
  server();
  database();
} catch (error) {
  throw new Error(`Error in config validation: ${error.message}`);
}

export default {
  common: common(),
  server: server(),
  database: database(),
};
