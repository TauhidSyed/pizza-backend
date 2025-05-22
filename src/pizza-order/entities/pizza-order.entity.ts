import { Customer } from 'src/customer/entities/customer.entity';
import { PizzaOrderItem } from 'src/pizza-order-item/entities/pizza-order-item.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('pizza_orders')
export class PizzaOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.pizzaOrders, {
    eager: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  orderDate: Date;

  @OneToMany(() => PizzaOrderItem, (item) => item.order, {
    cascade: true,
  })
  pizzaOrderItems: PizzaOrderItem[];
}
