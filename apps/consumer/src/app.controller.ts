import { Controller } from '@nestjs/common';

import {
  MessagePattern,
  RmqContext,
  Ctx,
  Payload,
} from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('demo-pattern')
  public async execute(
    @Payload() data: { msg: string; priority: number },
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();

    console.log('Consumer Recive: ', data);
    this.appService.CpuBoundTask(data);
    // console.log('Finish Cpu Bound Task');

    channel.ack(orginalMessage);
  }
}
