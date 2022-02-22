import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { HomeService } from 'src/domains/home/home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHello(@Res() response: Response) {
    return response
      .status(HttpStatus.OK)
      .json({
        status: 'success',
        message: 'Hello!',
        data: {
          app: this.homeService.getHello(),
        },
      })
      .end();
  }
}
