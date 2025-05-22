import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePizzaOrderItemDto } from './dto/create-pizza-order-item.dto';
import { UpdatePizzaOrderItemDto } from './dto/update-pizza-order-item.dto';
import { PizzaOrderItem } from './entities/pizza-order-item.entity';

@Injectable()
export class PizzaOrderItemService {
  constructor(
    @Inject('PIZZA_ORDER_ITEM_REPOSITORY')
    private readonly pizzaorderitemRepository: Repository<PizzaOrderItem>,
  ) {}

  async create(
    createPizzaOrderItemDto: CreatePizzaOrderItemDto,
  ): Promise<PizzaOrderItem> {
    const newPizzaOrderItem = this.pizzaorderitemRepository.create(
      createPizzaOrderItemDto,
    );
    return await this.pizzaorderitemRepository.save(newPizzaOrderItem);
  }

  async findAll(): Promise<PizzaOrderItem[]> {
    return await this.pizzaorderitemRepository.find();
  }

  async findOne(id: number): Promise<PizzaOrderItem | null> {
    return await this.pizzaorderitemRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePizzaOrderItemDto: UpdatePizzaOrderItemDto,
  ): Promise<PizzaOrderItem | null> {
    const pizzaorderitem = await this.pizzaorderitemRepository.findOneBy({
      id,
    });
    if (!pizzaorderitem) return null;

    const updated = Object.assign(pizzaorderitem, updatePizzaOrderItemDto);
    return await this.pizzaorderitemRepository.save(updated);
  }

  async remove(id: number): Promise<PizzaOrderItem | null> {
    const pizzaorderitem = await this.pizzaorderitemRepository.findOneBy({
      id,
    });
    if (!pizzaorderitem) return null;

    await this.pizzaorderitemRepository.remove(pizzaorderitem);
    return pizzaorderitem;
  }
}
