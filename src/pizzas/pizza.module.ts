import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { DatabaseModule } from 'src/database/database.module';
import { pizzaProviders } from './pizza.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzaController],
    providers: [
    ...pizzaProviders,
    PizzaService,
  ],
})
export class PizzaModule {}
