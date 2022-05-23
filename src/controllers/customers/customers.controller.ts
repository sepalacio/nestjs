import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { Routes } from '../../constants';
import { ParseToIntPipe } from '../../common/parse-int.pipe';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dto';
import { CustomersService } from '../../services';

@Controller(Routes.customers)
export class CustomerController {
  constructor(private customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseToIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseToIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseToIntPipe) id: number) {
    return this.customersService.remove(+id);
  }
}
