import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * CORS (Cross-Origin Resource Sharing) es una tecnología que 
   * permite a los sitios web compartir recursos entre dominios
   * diferentes. Esto es muy útil para evitar la limitación de 
   * la misma origen (SOP) que existe en los navegadores modernos.
   * 
   * Habilitamos el CORS porque el backend y el frontend tienen
   * dos puntos de acceso diferentes, la url, por defecto es la
   * protección que tiene los navegadores.
   */
  app.enableCors();

  app.useGlobalPipes( 
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );
  await app.listen(3000);
}
bootstrap();
