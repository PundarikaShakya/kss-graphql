import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Mutation(() => Restaurant)
  async createRestaurant(
    @Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput,
  ) {
    return await this.restaurantService.create(createRestaurantInput);
  }
}
