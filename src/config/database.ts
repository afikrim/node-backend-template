import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  connection: process.env.DB_CONNECTION || 'mariadb',

  mariadb: {
    type: 'mariadb',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'database',
    synchronize: new Boolean(process.env.DB_SYNCHRONIZE || 'true'),
  },
  mongo: {
    url: process.env.MONGO_URI || 'mongodb://localhost:27017/mongo',
  },
}));
