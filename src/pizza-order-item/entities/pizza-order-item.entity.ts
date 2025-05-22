import { PizzaOrder } from 'src/pizza-order/entities/pizza-order.entity';
import { Pizza } from 'src/pizzas/entities/pizza.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class PizzaOrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PizzaOrder, (order) => order.pizzaOrderItems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: PizzaOrder;

  @ManyToOne(() => Pizza, (pizza) => pizza.orderItems, { eager: true })
  @JoinColumn({ name: 'pizza_id' })
  pizza: Pizza;

  @Column('int')
  quantity: number;
}
