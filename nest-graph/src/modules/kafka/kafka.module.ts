import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
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
      },
    ]),
  ],
  providers: [],
  exports: [ClientsModule],
})

// @Global()
// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'MICRO-SERVICE',
//         transport: Transport.KAFKA,
//         options: {
//           client: {
//             clientId: 'hero',
//             brokers: ['kafka:9092'],
//           },
//           consumer: {
//             groupId: 'hero-consumer',
//           },
//         },
//       },
//     ]),
//   ],
//   exports: [
//     ClientsModule.register([
//       {
//         name: 'MICRO-SERVICE',
//         transport: Transport.KAFKA,
//         options: {
//           client: {
//             clientId: 'hero',
//             brokers: ['kafka:9092'],
//           },
//           consumer: {
//             groupId: 'hero-consumer',
//           },
//         },
//       },
//     ]),
//   ],
// })
export class KafkaModule {}
