import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaOrderDto } from './create-pizza-order.dto';

export class UpdatePizzaOrderDto extends PartialType(CreatePizzaOrderDto) {}
