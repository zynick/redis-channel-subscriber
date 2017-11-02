'use_strict';

// const path = require('path');

const {

  NODE_ENV = 'development',

  REDIS_HOST = 'localhost',
  REDIS_PORT = 6379,
  REDIS_AUTH,

  REDIS_SUBSCRIBE = 'nothing',
  REDIS_QUEUE

} = process.env;

module.exports = {

  NODE_ENV,

  REDIS_HOST,
  REDIS_PORT,
  REDIS_AUTH,

  REDIS_SUBSCRIBE,
  REDIS_QUEUE

};