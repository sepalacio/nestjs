import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities';
import { CreateProductDto, UpdateProductDto } from '../../dto/product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 Coffee',
      stock: 10,
      image: '',
    },
  ];

  findAll(limit: number, offset: number, brand: string) {
    return this.products;
  }

  findOne(id: number) {
    const foundProduct = this.products.find((product) => product.id == id);

    if (!foundProduct) {
      throw new NotFoundException('The product was not found');
    }

    return foundProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const foundProduct = this.findOne(id);

    if (foundProduct) {
      const index = this.products.findIndex((product) => product.id == id);
      this.products[index] = {
        ...foundProduct,
        ...payload,
      };

      return this.products[index];
    }

    return {
      message: 'The product was not found',
    };
  }

  create(payload: CreateProductDto) {
    const id = this.products.length + 1;
    const newProduct = {
      id,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }
}
