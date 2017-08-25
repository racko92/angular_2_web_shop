import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersService } from './services/buyers-service.service';
import { ProductsService } from './services/products-service.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe
  ],
  providers: [
    BuyersService,
    ProductsService
  ],
  exports: [
    FilterPipe
  ]
})
export class SharedModule { }
