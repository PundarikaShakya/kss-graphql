import { Injectable } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  private _restaurantRepository: Repository<Restaurant>;

  constructor(private _connection: Connection) {
    this._restaurantRepository = this._connection.getRepository(Restaurant);
  }

  create(createRestaurantDto: CreateRestaurantInput) {
    return this._restaurantRepository.save(createRestaurantDto);
  }
}
