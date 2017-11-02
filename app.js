'use strict';

const redis = require('redis');

const {
    REDIS_FROM_HOST,
    REDIS_FROM_PORT,
    REDIS_FROM_AUTH,
    REDIS_FROM_SUBSCRIBE,

    REDIS_TO_HOST,
    REDIS_TO_PORT,
    REDIS_TO_AUTH,
    REDIS_TO_QUEUE
} = require('./config/config');


// connect

const redisFrom = redis.createClient(REDIS_FROM_PORT, REDIS_FROM_HOST);
if (REDIS_FROM_AUTH) {
    redisFrom.auth(REDIS_FROM_AUTH);
}

const redisTo = redis.createClient(REDIS_TO_PORT, REDIS_TO_HOST);
if (REDIS_TO_AUTH) {
    redisTo.auth(REDIS_TO_AUTH);
}


// channel from subscribe to queue

redisFrom.on('message', (channel, message) => {
		redisTo.lpush(REDIS_TO_QUEUE, message);
});

redisFrom.subscribe(REDIS_FROM_SUBSCRIBE);