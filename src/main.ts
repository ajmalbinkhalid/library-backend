// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Enable CORS for Docker and local development
  app.enableCors({
    origin: [
      'http://localhost:3001', // Local admin
      'http://admin:3001', // Docker admin
      'http://127.0.0.1:3001', // Alternative localhost
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); // Important: 0.0.0.0 for Docker

  console.log(`🚀 Backend running on http://localhost:${port}`);
  console.log(`🔐 JWT_SECRET loaded: ${!!configService.get('JWT_SECRET')}`);
}

bootstrap().catch((err) => {
  console.error('❌ Application failed to start:', err);
});
