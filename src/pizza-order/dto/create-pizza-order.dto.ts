class CreateBulkPizzaOrderItemDto {
  pizzaId: number;
  quantity: number;
}
export class CreatePizzaOrderDto {
  customer: number; // customer_id
  orderDate?: Date;
  pizzaOrderItems: CreateBulkPizzaOrderItemDto[];
}
