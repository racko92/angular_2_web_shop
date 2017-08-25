import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersService } from './services/buyers-service.service';
import { ProductsService } from './services/products-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    BuyersService,
    ProductsService
  ]
})
export class SharedModule { }
