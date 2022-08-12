import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * @description main.ts의 이름은 변경할 수 없지만 함수 이름은 수정할 수 있다. (bootstrap => Start)
 */
async function Start() {
  const app = await NestFactory.create(AppModule);

  /**
   *
   * @whitelist 데코레이터에 정의된 Property를 제외한 어떠한 속성도 접근할 수 없습니다.(400)
   * @forbidNonWhitelisted 데코레이터에 정의된 Property가 아닌 경우 존재해서는 안된다고 알려준다.(400)
   * @transform 파라미털로 들어온 값을 엔티티에 명시된 데이터 타입으로 변경해준다.
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}

Start();
