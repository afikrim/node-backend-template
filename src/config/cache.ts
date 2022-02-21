import { registerAs } from '@nestjs/config';

export default registerAs('cache', () => ({
  connection: 'redis',

  redis: {
    host: process.env.REDIS_CACHE_HOST || process.env.REDIS_HOST || 'localhost',
    port: +process.env.REDIS_CACHE_PORT || +process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_CACHE_PASSWORD || process.env.REDIS_PASSWORD,
    db: +process.env.REDIS_CACHE_DB || 1,
  },
}));
