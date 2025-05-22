import { PizzaOrder } from 'src/pizza-order/entities/pizza-order.entity';
import { Pizza } from 'src/pizzas/entities/pizza.entity';

export class CreatePizzaOrderItemDto {
  order: PizzaOrder;
  pizza: Pizza;
  quantity: number;
}
