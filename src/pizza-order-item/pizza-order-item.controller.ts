import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PizzaOrderItemService } from './pizza-order-item.service';
import { CreatePizzaOrderItemDto } from './dto/create-pizza-order-item.dto';
import { UpdatePizzaOrderItemDto } from './dto/update-pizza-order-item.dto';

@Controller('pizza-order-item')
export class PizzaOrderItemController {
  constructor(private readonly pizzaOrderItemService: PizzaOrderItemService) {}

  @Post()
  create(@Body() createPizzaOrderItemDto: CreatePizzaOrderItemDto) {
    return this.pizzaOrderItemService.create(createPizzaOrderItemDto);
  }

  @Get()
  findAll() {
    return this.pizzaOrderItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzaOrderItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePizzaOrderItemDto: UpdatePizzaOrderItemDto) {
    return this.pizzaOrderItemService.update(+id, updatePizzaOrderItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaOrderItemService.remove(+id);
  }
}
