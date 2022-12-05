import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern({ cmd: 'test' })
  getMessage(name: string): string {
    return `Hello ${name}`;
  }
}
