import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import app from './config/app';
import cache from './config/cache';
import database from './config/database';
import http from './config/http';
import vendor from './config/vendor';
import { LoggerMiddleware } from './infrastructure/http/middlewares/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app, cache, database, http, vendor],
      envFilePath: ['.env.local', '.env'],
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
