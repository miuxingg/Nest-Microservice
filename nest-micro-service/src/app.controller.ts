import { Controller, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('test')
  async testMicroService(
    @Payload(ValidationPipe) data: string,
    @Ctx() context: KafkaContext,
  ) {
    console.log('----> ctx', context.getTopic());
    console.log('----> data', typeof data);
    // this.appService.kafkaClient.emit('reponsetest', 'data response');

    console.log('----> emit done');
    return 'data response';
  }
}
