import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePizzaOrderDto } from './dto/create-pizza-order.dto';
import { UpdatePizzaOrderDto } from './dto/update-pizza-order.dto';
import { PizzaOrder } from './entities/pizza-order.entity';
@Injectable()
export class PizzaOrderService {
  constructor(
    @Inject('PIZZA_ORDER_REPOSITORY')
    private readonly pizzaOrderRepository: Repository<PizzaOrder>,
  ) {}

  async create(createPizzaOrderDto: CreatePizzaOrderDto): Promise<PizzaOrder> {
    const newPizzaOrder = this.pizzaOrderRepository.create(createPizzaOrderDto);
    return await this.pizzaOrderRepository.save(newPizzaOrder);
  }

  async findAll(): Promise<PizzaOrder[]> {
    return await this.pizzaOrderRepository.find();
  }

  async findOne(id: number): Promise<PizzaOrder | null> {
    return await this.pizzaOrderRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePizzaOrderDto: UpdatePizzaOrderDto,
  ): Promise<PizzaOrder | null> {
    const pizzaOrder = await this.pizzaOrderRepository.findOneBy({ id });
    if (!pizzaOrder) return null;

    const updated = Object.assign(pizzaOrder, updatePizzaOrderDto);
    return await this.pizzaOrderRepository.save(updated);
  }

  async remove(id: number): Promise<PizzaOrder | null> {
    const pizzaOrder = await this.pizzaOrderRepository.findOneBy({ id });
    if (!pizzaOrder) return null;

    await this.pizzaOrderRepository.remove(pizzaOrder);
    return pizzaOrder;
  }
}
