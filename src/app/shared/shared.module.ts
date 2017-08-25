import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersService } from './services/buyers-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    BuyersService,
  ]
})
export class SharedModule { }
