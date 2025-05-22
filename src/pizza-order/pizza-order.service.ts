import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { CreatePizzaOrderDto } from './dto/create-pizza-order.dto';
import { UpdatePizzaOrderDto } from './dto/update-pizza-order.dto';
import { PizzaOrder } from './entities/pizza-order.entity';
import { PizzaOrderItem } from 'src/pizza-order-item/entities/pizza-order-item.entity';

@Injectable()
export class PizzaOrderService {
  constructor(
    @Inject('PIZZA_ORDER_REPOSITORY')
    private readonly pizzaOrderRepository: Repository<PizzaOrder>,

    @Inject('PIZZA_ORDER_ITEM_REPOSITORY')
    private readonly pizzaOrderItemRepository: Repository<PizzaOrderItem>,
  ) {}

  async findAll(): Promise<PizzaOrder[]> {
    return await this.pizzaOrderRepository.find({
      relations: ['pizzaOrderItems', 'customer'],
    });
  }

  async findOne(id: number): Promise<PizzaOrder | null> {
    return await this.pizzaOrderRepository.findOne({
      where: { id },
      relations: ['pizzaOrderItems', 'customer'],
    });
  }

  async create(createPizzaOrderDto: CreatePizzaOrderDto): Promise<PizzaOrder> {
    const { pizzaOrderItems, customer, orderDate } = createPizzaOrderDto;

    const newPizzaOrder = this.pizzaOrderRepository.create({
      customer: { id: customer },
      orderDate,
    });

    const savedOrder = await this.pizzaOrderRepository.save(newPizzaOrder);

    const pizzaOrderItemEntities = pizzaOrderItems.map((itemDto) =>
      this.pizzaOrderItemRepository.create({
        order: savedOrder,
        pizza: { id: itemDto.pizzaId }, // assuming pizza is passed as object or id
        quantity: itemDto.quantity,
      }),
    );

    const savedItems = await this.pizzaOrderItemRepository.save(
      pizzaOrderItemEntities,
    );

    savedOrder.pizzaOrderItems = savedItems;
    return savedOrder;
  }

  async update(
    id: number,
    updatePizzaOrderDto: UpdatePizzaOrderDto,
  ): Promise<PizzaOrder | null> {
    const pizzaOrder = await this.pizzaOrderRepository.findOne({
      where: { id },
      relations: ['pizzaOrderItems'],
    });
    if (!pizzaOrder) return null;

    if (updatePizzaOrderDto.pizzaOrderItems) {
      // Remove existing items
      await this.pizzaOrderItemRepository.delete({ order: { id } });

      // Create new PizzaOrderItems
      const pizzaOrderItemEntities = updatePizzaOrderDto.pizzaOrderItems.map(
        (itemDto) =>
          this.pizzaOrderItemRepository.create({
            order: pizzaOrder,
            pizza: { id: itemDto.pizzaId },
            quantity: itemDto.quantity,
          }),
      );
      const savedItems = await this.pizzaOrderItemRepository.save(
        pizzaOrderItemEntities,
      );
      pizzaOrder.pizzaOrderItems = savedItems;
    }

    if (updatePizzaOrderDto.customer) {
      pizzaOrder.customer = { id: updatePizzaOrderDto.customer } as any;
    }

    if (updatePizzaOrderDto.orderDate) {
      pizzaOrder.orderDate = updatePizzaOrderDto.orderDate;
    }

    return await this.pizzaOrderRepository.save(pizzaOrder);
  }

  async remove(id: number): Promise<PizzaOrder | null> {
    const pizzaOrder = await this.pizzaOrderRepository.findOneBy({ id });
    if (!pizzaOrder) return null;

    await this.pizzaOrderRepository.remove(pizzaOrder);
    return pizzaOrder;
  }
}
