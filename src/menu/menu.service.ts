import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  private _menuRepository: Repository<Menu>;

  constructor(private _connection: Connection) {
    this._menuRepository = this._connection.getRepository(Menu);
  }
  create(createMenuInput: CreateMenuInput) {
    return this._menuRepository.save(createMenuInput);
  }

  findAll() {
    return this._menuRepository.find();
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
