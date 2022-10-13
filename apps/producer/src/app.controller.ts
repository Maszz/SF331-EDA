import { Controller, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { resolve } from 'node:path/win32';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbit-mq.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  async sendMsg() {
    const sub = this.rabbitMQService.send('demo-pattern', {
      msg: 'Hello World',
      priority: 1,
    });

    console.log('sent queue to rabbit-mq-demo queue');
    return 'sent queue to rabbit-mq-demo queue';
  }
}
