import { NestFactory } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppConsumerModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
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
  // const configService = consumer.get(ConfigService);

  await consumer.listen();
  console.log('consumer on listening')
}
bootstrap();
