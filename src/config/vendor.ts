import { registerAs } from '@nestjs/config';

export default registerAs('vendor', () => ({
  bri: {
    baseUrl: process.env.BRI_BASE_URL,
    clientId: process.env.BRI_CLIENT_ID,
    clientSecret: process.env.BRI_CLIENT_SECRET,
  },
}));
