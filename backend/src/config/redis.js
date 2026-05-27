const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'nippy-microcompact-impressive-71491.db.redis.io',
        port: 18898
    }
});

module.exports = redisClient;