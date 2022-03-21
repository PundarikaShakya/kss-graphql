import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { Connection, Repository } from 'typeorm';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  private _menuRepository: Repository<Menu>;

  constructor(
    private _connection: Connection,
    private restaurantService: RestaurantService,
  ) {
    this._menuRepository = this._connection.getRepository(Menu);
  }
  async create(createMenuInput: CreateMenuInput) {
    const { name, price, description, restaurantId } = createMenuInput;

    const menu = new Menu();
    menu.name = name;
    menu.description = description;
    menu.price = price;

    if (restaurantId) {
      const restaurant = await this.restaurantService.findOne(restaurantId);
      menu.restaurant = restaurant;
    }
    return this._menuRepository.save(menu);
  }

  async findAll() {
    const menus = await this._menuRepository.find({
      relations: ['restaurant'],
    });
    return menus;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuInput: UpdateMenuInput) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
