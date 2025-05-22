import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PizzaOrderItemController } from './pizza-order-item.controller';
import { PizzaOrderItemService } from './pizza-order-item.service';
import { pizzaOrderItemProviders } from './pizza-order-item.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzaOrderItemController],
  providers: [...pizzaOrderItemProviders, PizzaOrderItemService],
})
export class PizzaOrderItemModule {}
