import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { IEnvVariables } from 'src/utils/env.types';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<IEnvVariables>);

  const frontendUrl = configService.get('FRONTEND_URL', { infer: true })!;
  const port = configService.get('BACKEND_PORT', { infer: true })!;

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
  });

  await app.listen(port);
}
bootstrap();
