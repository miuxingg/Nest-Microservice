import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit {
  readonly clientKafka: ClientKafka;
  constructor() {
    this.clientKafka = new ClientKafka({
      client: {
        clientId: 'api-gateway',
        brokers: ['kafka:9092'],
      },
      consumer: {
        groupId: 'api-gateway-consumer',
      },
    });
  }
  onModuleInit() {}
}
