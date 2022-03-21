import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@ObjectType()
@Entity('menu')
export class Menu {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @Field()
  name: string;

  @Column({ type: 'float' })
  @Field(() => Float)
  price: number;

  @Column({ type: 'varchar', length: 50 })
  @Field()
  description: string;

  @ManyToOne(() => Restaurant, (res) => res.id)
  @JoinColumn({ name: 'restaurantId' })
  @Field(() => Restaurant, { nullable: true })
  restaurant?: Restaurant;
}
