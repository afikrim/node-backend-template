import { registerAs } from '@nestjs/config';

export default registerAs('http', () => ({
  host: process.env.HOST,
  port: +process.env.PORT || 3000,
}));
