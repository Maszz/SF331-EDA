import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { RabbitMQService } from './rabbit-mq.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: 'rabbit-mq-demo',
          },
        }),
        name: 'rabbit-mq-module',
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
