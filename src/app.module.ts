import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CustomerController } from './controllers/customers/customers.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { ProductsController } from './controllers/products/products.controller';
import { UsersController } from './controllers/users/users.controller';

import { ProductsService } from './services/products/products.service';
import { BrandsService } from './services/brands/brands.service';
import { CustomersService } from './services/customers/customers.service';
import { CategoriesService } from './services/categories/categories.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    BrandsController,
    CustomerController,
  ],
  providers: [
    AppService,
    ProductsService,
    BrandsService,
    CustomersService,
    CategoriesService,
    UsersService,
  ],
})
export class AppModule {}
