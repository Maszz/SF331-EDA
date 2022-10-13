import { NestFactory } from '@nestjs/core';
import { AppProducerModule } from './app.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const producer = await NestFactory.create(AppProducerModule);
  const port = process.env.PORT;
  await producer.listen(port);
  console.log(`Producer listen on port: ${port}`);
}
bootstrap();
