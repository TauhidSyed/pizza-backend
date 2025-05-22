import { Test, TestingModule } from '@nestjs/testing';
import { PizzaOrderController } from './pizza-order.controller';
import { PizzaOrderService } from './pizza-order.service';

describe('PizzaOrderController', () => {
  let controller: PizzaOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzaOrderController],
      providers: [PizzaOrderService],
    }).compile();

    controller = module.get<PizzaOrderController>(PizzaOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
