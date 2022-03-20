import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
