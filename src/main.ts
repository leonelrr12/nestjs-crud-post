import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swager';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  // Inicialisa modulo para que muestre documentacion de la API en forma automatica
  initSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  )

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  logger.log(`Server id running in ${PORT}`)
}
bootstrap();
