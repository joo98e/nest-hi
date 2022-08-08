import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * @description 데코레이터
 * nestjs는 데코레이터와 함께 하고, 클래스에 함수 기능을 추가할 수 있도록 한다.
 * 클래스 위의 함수이며 클래스를 위해 움직인다.
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
