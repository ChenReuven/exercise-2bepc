import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_CONST } from './constants/app.const';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_CONST.PORT);
}
bootstrap();
