import { NestFactory } from '@nestjs/core';
import { AppProducerModule } from './producer/app.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppConsumerModule } from './consumer/app.module';

async function bootstrap() {
  const producer = await NestFactory.create(AppProducerModule);
  await producer.listen(3001);
  const consumer = await NestFactory.createMicroservice(AppConsumerModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'rabbit-mq-demo',
      // false = manual acknowledgement; true = automatic acknowledgment
      noAck: false,
      // Get one by one
      prefetchCount: 1,
    },
  });
  await consumer.listen();
}
bootstrap();
