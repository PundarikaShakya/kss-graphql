import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => Menu)
export class MenuResolver {
  private pubSub: PubSub;
  constructor(private readonly menuService: MenuService) {
    this.pubSub = new PubSub();
  }

  @Mutation(() => Menu)
  async createMenu(@Args('createMenuInput') createMenuInput: CreateMenuInput) {
    const menu = await this.menuService.create(createMenuInput);
    this.pubSub.publish('menuAdded', { menuAdded: menu });
    return menu;
  }

  @Mutation(() => Menu)
  addMenuToRestaurant(
    @Args('createMenuInput') createMenuInput: CreateMenuInput,
  ) {
    return this.menuService.create(createMenuInput);
  }

  @Query(() => [Menu], { name: 'menus' })
  findAll() {
    return this.menuService.findAll();
  }

  @Query(() => Menu, { name: 'menu' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.menuService.findOne(id);
  }

  @Mutation(() => Menu)
  updateMenu(@Args('updateMenuInput') updateMenuInput: UpdateMenuInput) {
    return this.menuService.update(updateMenuInput.id, updateMenuInput);
  }

  @Mutation(() => Menu)
  removeMenu(@Args('id', { type: () => Int }) id: number) {
    return this.menuService.remove(id);
  }

  @Subscription((returns) => Menu)
  menuAdded() {
    return this.pubSub.asyncIterator('menuAdded');
  }
}
