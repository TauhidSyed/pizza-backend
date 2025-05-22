import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaModule } from './pizzas/pizza.module';
import { CustomerModule } from './customer/customer.module';
import { PizzaOrderModule } from './pizza-order/pizza-order.module';
import { PizzaOrderItemModule } from './pizza-order-item/pizza-order-item.module';

@Module({
  imports: [PizzaModule, CustomerModule, PizzaOrderModule, PizzaOrderItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
