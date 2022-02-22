import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HomeService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return this.configService.get('app');
  }
}
