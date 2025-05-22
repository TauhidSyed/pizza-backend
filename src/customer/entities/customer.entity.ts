import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PizzaOrder } from '../../pizza-order/entities/pizza-order.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @OneToMany(() => PizzaOrder, (order) => order.customer)
  pizzaOrders: PizzaOrder[];
}
