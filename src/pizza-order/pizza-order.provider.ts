import { DataSource } from 'typeorm';
import { PizzaOrder } from './entities/pizza-order.entity';

export const pizzaOrderProviders = [
  {
    provide: 'PIZZA_ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PizzaOrder),
    inject: ['DATA_SOURCE'],
  },
];
