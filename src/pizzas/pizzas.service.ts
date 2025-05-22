import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

type PizzaClass = CreatePizzaDto & {id: number}
let myPizzas: PizzaClass[] = []
@Injectable()
export class PizzasService {
  create(createPizzaDto: CreatePizzaDto) {
    const newPizza: PizzaClass = {id: myPizzas.length + 1, ...createPizzaDto}
    myPizzas.push(newPizza)
    return newPizza;
  }

  findAll() {
    return myPizzas;
  }

  findOne(id: number) {
    const filtered = myPizzas.filter((p) => p.id == id)
    if (!filtered) return null;
    return filtered[0];
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    const filtered = myPizzas.filter((p) => p.id == id)
    if (!filtered) return null;
    let updatedPizza: PizzaClass = {...filtered[0]}
    if (updatePizzaDto?.name) updatedPizza.name = updatePizzaDto.name!;
    if (updatePizzaDto?.size) updatedPizza.size = updatePizzaDto.size!;
    if (updatePizzaDto?.price) updatedPizza.price = updatePizzaDto.price!;

    myPizzas = myPizzas.filter((p) => p.id != id)
    myPizzas.push(updatedPizza)
    
    return updatedPizza;
  }

  remove(id: number) {
    const filtered = myPizzas.filter((p) => p.id == id)
    if (!filtered) return null;

    myPizzas = myPizzas.filter((p) => p.id != id)
    return filtered[0]
  }
}
