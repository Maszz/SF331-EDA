import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService implements OnModuleInit {
  constructor(
    @Inject('rabbit-mq-module') private readonly client: ClientProxy,
  ) {}

  onModuleInit() {
    this.client.connect();
  }

  public send(pattern: string, data: any) {
    return this.client.send(pattern, data).subscribe();
  }
}
