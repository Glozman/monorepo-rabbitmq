import { Body, Controller, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller()
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  getHello(@Body() msg: object) {
    console.log(msg);
    return this.producerService.getHello(msg);
  }
}
