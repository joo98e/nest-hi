import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * @description main.ts의 이름은 변경할 수 없지만 함수 이름은 수정할 수 있다. (bootstrap => Start)
 */
async function Start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

Start();
