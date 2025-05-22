export class CreatePizzaOrderDto {
  customer: number; // customer_id
  orderDate?: Date;
  pizzaOrderItems: number[]; // array of pizzaOrderItem ids or objects, depending on your use case
}
