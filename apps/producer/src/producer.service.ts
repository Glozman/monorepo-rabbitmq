import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducerService {
  constructor(@Inject('TEST_SERVICE') private client: ClientProxy) {}

  async getHello(msg: any) {
    return this.client.send({ cmd: 'test' }, msg.name);
  }
}
