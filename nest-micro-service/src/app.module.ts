import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ClientKafka],
})
export class AppModule {}
