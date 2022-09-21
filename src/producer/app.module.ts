import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from './rabbit-mq.module';
import { ConfigModule } from '@nestjs/config';
import { envConfigObject } from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [envConfigObject] }),
    RabbitMQModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppProducerModule {}
