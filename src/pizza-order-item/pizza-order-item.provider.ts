import { DataSource } from 'typeorm';
import { PizzaOrderItem } from './entities/pizza-order-item.entity';

export const pizzaOrderItemProviders = [
  {
    provide: 'PIZZA_ORDER_ITEM_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PizzaOrderItem),
    inject: ['DATA_SOURCE'],
  },
];
