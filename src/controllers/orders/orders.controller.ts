import { Controller, Post, Body } from '@nestjs/common';
import { Routes } from '../../constants';

@Controller(Routes.orders)
export class OrdersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Success',
      payload,
    };
  }
}
