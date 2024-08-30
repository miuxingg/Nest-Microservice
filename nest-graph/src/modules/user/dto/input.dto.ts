import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateDto {
  @Field()
  email: string;

  @Field()
  name?: string;
}
