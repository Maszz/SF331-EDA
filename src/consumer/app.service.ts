import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  CpuBoundTask(data: any) {
    const res = new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    Promise.resolve(res).then(() => {
      console.log('CpuBoundTask done w/ data', data);
    });
  }
}
