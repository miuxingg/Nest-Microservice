import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.services';
import { UserCreateDto } from './dto/input.dto';
import { User } from './dto/output.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  async login() {
    console.log('---> runnnnnn');
    await this.userService.testResponse();
    return 'done';
  }

  @Mutation(() => User)
  async createUser(
    @Args({
      name: 'user',
      type: () => UserCreateDto,
    })
    user: UserCreateDto,
  ) {
    console.log(user);
    return await this.userService.createUser(user);
  }
}
