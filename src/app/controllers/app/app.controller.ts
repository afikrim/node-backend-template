import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from 'src/domains/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() response: Response) {
    return response
      .status(HttpStatus.OK)
      .json({
        status: 'success',
        message: 'Hello!',
        data: {
          app: this.appService.getHello(),
        },
      })
      .end();
  }
}
