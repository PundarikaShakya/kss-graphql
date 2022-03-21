import { Injectable } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  private _restaurantRepository: Repository<Restaurant>;

  constructor(private _connection: Connection) {
    this._restaurantRepository = this._connection.getRepository(Restaurant);
  }
  create(createRestaurantDto: CreateRestaurantDto) {
    return this._restaurantRepository.save(createRestaurantDto);
  }

  findAll() {
    return this._restaurantRepository.find();
  }

  findOne(id: number) {
    return this._restaurantRepository.findOne(id);
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return this._restaurantRepository.update(id, updateRestaurantDto);
  }

  remove(id: number) {
    return this._restaurantRepository.delete(id);
  }
}
