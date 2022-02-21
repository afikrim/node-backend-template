import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from 'src/app/middlewares/logger.middleware';
import app from 'src/config/app';
import cache from 'src/config/cache';
import database from 'src/config/database';
import http from 'src/config/http';
import vendor from 'src/config/vendor';
import { AppService } from 'src/domains/app/app.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { AppController } from './controllers/app/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app, cache, database, http, vendor],
      envFilePath: ['.env.local', '.env'],
    }),
    // add typeorm when using rdb
    // add mongo when using mongo
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
