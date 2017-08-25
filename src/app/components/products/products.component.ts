import { Component } from '@angular/core';
import { ProductsService } from '../../shared/services/products-service.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})

export class ProductsComponent{

  public products: any[];
  private filter: string = '';

  constructor(private productsService: ProductsService) { 
    this.products = productsService.getProducts();
  }
}
