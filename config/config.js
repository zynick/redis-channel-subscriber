'use_strict';

// const path = require('path');

const {

  NODE_ENV = 'development',

  REDIS_FROM_HOST = 'localhost',
  REDIS_FROM_PORT = 6379,
  REDIS_FROM_AUTH,
  REDIS_FROM_SUBSCRIBE = 'nothing',

  REDIS_TO_HOST = 'localhost',
  REDIS_TO_PORT = 6379,
  REDIS_TO_AUTH,
  REDIS_TO_QUEUE = 'nothing'

} = process.env;

module.exports = {

  NODE_ENV,

  REDIS_FROM_HOST,
  REDIS_FROM_PORT,
  REDIS_FROM_AUTH,
  REDIS_FROM_SUBSCRIBE,

  REDIS_TO_HOST,
  REDIS_TO_PORT,
  REDIS_TO_AUTH,
  REDIS_TO_QUEUE

};