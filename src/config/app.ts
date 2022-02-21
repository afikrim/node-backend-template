/* eslint-disable @typescript-eslint/no-var-requires */
import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: require('../../package.json').name,
  version: require('../../package.json').version,
}));
