import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create a Kafka microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'api-gateway',
        brokers: ['kafka:9092'],
      },
      consumer: {
        groupId: 'api-gateway-consumer',
      },
    },
  });

  // Start the Kafka microservice
  await app.startAllMicroservices();

  await app.listen(9000);
}
bootstrap();
