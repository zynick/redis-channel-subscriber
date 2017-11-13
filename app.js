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


console.log('REDIS_FROM_HOST:', REDIS_FROM_HOST);
console.log('REDIS_FROM_PORT:', REDIS_FROM_PORT);
console.log('REDIS_FROM_AUTH:', REDIS_FROM_AUTH);
console.log('REDIS_FROM_SUBSCRIBE:', REDIS_FROM_SUBSCRIBE);
console.log('');
console.log('REDIS_TO_HOST:', REDIS_TO_HOST);
console.log('REDIS_TO_PORT:', REDIS_TO_PORT);
console.log('REDIS_TO_AUTH:', REDIS_TO_AUTH);
console.log('REDIS_TO_QUEUE:', REDIS_TO_QUEUE);
console.log('');

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
    console.log(`    ${message.substr(0,100)}`);
	const response = redisTo.lpush(REDIS_TO_QUEUE, message);
    console.log(`        ${response}`);
});

redisFrom.subscribe(REDIS_FROM_SUBSCRIBE);