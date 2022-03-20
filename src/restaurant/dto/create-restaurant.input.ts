import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  location: string;
}
