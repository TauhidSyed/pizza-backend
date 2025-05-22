import { Test, TestingModule } from '@nestjs/testing';
import { PizzaOrderService } from './pizza-order.service';

describe('PizzaOrderService', () => {
  let service: PizzaOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaOrderService],
    }).compile();

    service = module.get<PizzaOrderService>(PizzaOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
