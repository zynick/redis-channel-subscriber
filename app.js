'use strict';

const redis = require('redis');

const {
	REDIS_HOST,
	REDIS_PORT,
	REDIS_AUTH,
	REDIS_SUBSCRIBE,
	REDIS_QUEUE
} = require('./config/config');

const client = redis.createClient(REDIS_PORT, REDIS_HOST);
if (REDIS_AUTH) {
    client.auth(REDIS_AUTH);
}



client.on('message', (channel, message) => {
    console.log(`channel ${channel}: ${message}`);
});

client.subscribe(REDIS_SUBSCRIBE);