import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello 네스트!';
  }

  getHi(): string {
    return 'get hi';
  }
}
