
import { DataSource } from 'typeorm';
import { Pizza } from './entities/pizza.entity';

export const pizzaProviders = [
  {
    provide: 'PIZZA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pizza),
    inject: ['DATA_SOURCE'],
  },
];
