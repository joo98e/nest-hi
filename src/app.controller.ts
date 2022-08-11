import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @description main.ts => module => controller => service
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  getHi(): String {
    return this.appService.getHi();
  }
}
