import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateMenuInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field()
  description: string;
}
