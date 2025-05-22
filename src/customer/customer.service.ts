import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const newCustomer = this.customerRepository.create(createCustomerDto);
    return await this.customerRepository.save(newCustomer);
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async findOne(id: number): Promise<Customer | null> {
    return await this.customerRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer | null> {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) return null;

    const updated = Object.assign(customer, updateCustomerDto);
    return await this.customerRepository.save(updated);
  }

  async remove(id: number): Promise<Customer | null> {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) return null;

    await this.customerRepository.remove(customer);
    return customer;
  }
}
