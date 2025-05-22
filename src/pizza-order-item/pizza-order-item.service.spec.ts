import { Test, TestingModule } from '@nestjs/testing';
import { PizzaOrderItemService } from './pizza-order-item.service';

describe('PizzaOrderItemService', () => {
  let service: PizzaOrderItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaOrderItemService],
    }).compile();

    service = module.get<PizzaOrderItemService>(PizzaOrderItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
