import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Menu } from 'src/menu/entities/menu.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity('restaurant')
@ObjectType()
export class Restaurant {
  @PrimaryColumn({ generated: true })
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field()
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  @Field()
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field()
  location: string;

  @OneToMany(() => Menu, (menu) => menu.restaurant, {
    eager: true,
    cascade: true,
  })
  @Field(() => [Menu], { nullable: true })
  menu?: Menu[];
}
