import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaOrderItemDto } from './create-pizza-order-item.dto';

export class UpdatePizzaOrderItemDto extends PartialType(CreatePizzaOrderItemDto) {}
