import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.services';
import { User } from '@prisma/client';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @Inject() private readonly prismaService: PrismaService,
    @Inject('KAFKA_CLIENT') private readonly kafkaService: ClientKafka,
  ) {}
  async onModuleInit() {
    console.log('---on init', this.kafkaService);
    this.kafkaService.subscribeToResponseOf('test');
    await this.kafkaService.connect();
  }

  async testMicro() {
    this.kafkaService.emit('test', { test: 111 });
    // this.kafkaService.
  }

  async testResponse() {
    console.log('----> emit data ');
    this.kafkaService.send('test', { test: 111 }).subscribe((data) => {
      console.log('------> datatata', data);
    });
    // this.kafkaService.send('test2', { test: 111 }).subscribe((data) => {
    //   console.log('datatata', data);
    // });
    // console.log('-----> response', data);
  }

  async allUser() {
    return this.prismaService.user.findMany();
  }

  async createUser(user: { email: string; name?: string }): Promise<User> {
    return await this.prismaService.user.create({ data: user });
  }
}
