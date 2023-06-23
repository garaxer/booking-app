import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/config')
  config() {
    return { g: 1, profile: process.env.PROFILE, stage: process.env.STAGE };
  }
}
