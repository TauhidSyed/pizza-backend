import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pizza } from './entities/pizza.entity';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
@Injectable()
export class PizzaService {
  constructor(
    @Inject('PIZZA_REPOSITORY')
    private readonly pizzaRepository: Repository<Pizza>,
  ) {}

  async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    const newPizza = this.pizzaRepository.create(createPizzaDto);
    return await this.pizzaRepository.save(newPizza);
  }

  async findAll(): Promise<Pizza[]> {
    return await this.pizzaRepository.find();
  }

  async findOne(id: number): Promise<Pizza | null> {
    return await this.pizzaRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePizzaDto: UpdatePizzaDto,
  ): Promise<Pizza | null> {
    const pizza = await this.pizzaRepository.findOneBy({ id });
    if (!pizza) return null;

    const updated = Object.assign(pizza, updatePizzaDto);
    return await this.pizzaRepository.save(updated);
  }

  async remove(id: number): Promise<Pizza | null> {
    const pizza = await this.pizzaRepository.findOneBy({ id });
    if (!pizza) return null;

    await this.pizzaRepository.remove(pizza);
    return pizza;
  }
}
