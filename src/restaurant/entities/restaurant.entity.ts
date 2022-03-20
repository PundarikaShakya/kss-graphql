import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
