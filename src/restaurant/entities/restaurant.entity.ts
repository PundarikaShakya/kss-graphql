import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('restaurant')
export class Restaurant {
  @PrimaryColumn({ generated: true })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  location: string;
}
