import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import app from './config/app';
import cache from './config/cache';
import database from './config/database';
import http from './config/http';
import vendor from './config/vendor';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app, cache, database, http, vendor],
      envFilePath: ['.env.local', '.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
