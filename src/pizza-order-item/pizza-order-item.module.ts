import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PizzaOrderItemController } from './pizza-order-item.controller';
import { PizzaOrderItemService } from './pizza-order-item.service';
import { pizzaorderitemProviders } from './pizza-order-item.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzaOrderItemController],
  providers: [...pizzaorderitemProviders, PizzaOrderItemService],
})
export class PizzaOrderItemModule {}
