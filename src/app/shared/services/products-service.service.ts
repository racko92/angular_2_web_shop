import { Injectable } from '@angular/core';
import { Product } from '../../components/products/product';


@Injectable()


export class ProductsService {


  private products = [
    new Product(1, 'TV', '654'),
    new Product(2, 'Phone', '23'),
    new Product(3, 'Laptop', '1'),
    new Product(4, 'Keyboard', '15'),
    new Product(5, 'Mouse', '100'),
    new Product(6, 'Tablet', '9000')

  ];
  constructor() { }

  public getProducts() {
    return this.products;
  }
}
