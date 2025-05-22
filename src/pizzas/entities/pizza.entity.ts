import { PizzaOrderItem } from 'src/pizza-order-item/entities/pizza-order-item.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Pizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  size: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'text' })
  imageUrl: string;

  @OneToMany(() => PizzaOrderItem, (orderItem) => orderItem.pizza)
  orderItems: PizzaOrderItem[];
}
