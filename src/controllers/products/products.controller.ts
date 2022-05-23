import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Routes } from '../../constants';
import { ProductsService } from '../../services';
import { ParseToIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../../dto/product.dto';

@Controller(Routes.products)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll(limit, offset, brand);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('id', ParseToIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
