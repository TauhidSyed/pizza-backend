import { Test, TestingModule } from '@nestjs/testing';
import { PizzaOrderItemController } from './pizza-order-item.controller';
import { PizzaOrderItemService } from './pizza-order-item.service';

describe('PizzaOrderItemController', () => {
  let controller: PizzaOrderItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzaOrderItemController],
      providers: [PizzaOrderItemService],
    }).compile();

    controller = module.get<PizzaOrderItemController>(PizzaOrderItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
