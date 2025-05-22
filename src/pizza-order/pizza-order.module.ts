import { Module } from '@nestjs/common';
import { PizzaOrderService } from './pizza-order.service';
import { PizzaOrderController } from './pizza-order.controller';
import { DatabaseModule } from 'src/database/database.module';
import { pizzaOrderProviders } from './pizza-order.provider';
import { pizzaOrderItemProviders } from 'src/pizza-order-item/pizza-order-item.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzaOrderController],
  providers: [
    ...pizzaOrderProviders,
    ...pizzaOrderItemProviders,
    PizzaOrderService,
  ],
})
export class PizzaOrderModule {}
