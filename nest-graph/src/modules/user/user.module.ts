import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.services';
import { PrismaModule } from '../prisma/prisma.module';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  imports: [PrismaModule, KafkaModule],
  // controllers: [UserResolver],
  providers: [UserResolver, UserService],
  exports: [],
})
export class UserModule {}
