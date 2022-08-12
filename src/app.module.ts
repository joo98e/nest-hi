import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { TestController } from './test/test.controller';

/**
 * @description 데코레이터
 * nestjs는 데코레이터와 함께 하고, 클래스에 함수 기능을 추가할 수 있도록 한다.
 * 클래스 위의 함수이며 클래스를 위해 움직인다.
 */
@Module({
  imports: [],
  controllers: [MoviesController, TestController],
  providers: [MoviesService],
})
export class AppModule {}
