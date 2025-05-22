import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PizzaOrderService } from './pizza-order.service';
import { CreatePizzaOrderDto } from './dto/create-pizza-order.dto';
import { UpdatePizzaOrderDto } from './dto/update-pizza-order.dto';

@Controller('pizza-order')
export class PizzaOrderController {
  constructor(private readonly pizzaOrderService: PizzaOrderService) {}

  @Post()
  create(@Body() createPizzaOrderDto: CreatePizzaOrderDto) {
    return this.pizzaOrderService.create(createPizzaOrderDto);
  }

  @Get()
  findAll() {
    return this.pizzaOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzaOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaOrderDto: UpdatePizzaOrderDto) {
    return this.pizzaOrderService.update(+id, updatePizzaOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaOrderService.remove(+id);
  }
}
