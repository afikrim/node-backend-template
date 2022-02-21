import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  url: process.env.MONGO_URI || 'mongodb://localhost:27017/mongo',
}));
