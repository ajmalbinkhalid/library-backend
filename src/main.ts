import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
  console.log(`🚀 Backend running on PORT ${process.env.PORT}`);
}

bootstrap().catch((err) => {
  console.error('❌ Application failed to start:', err);
});
