import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/kupci',
  //   pathMatch: 'full'
  // },
  {
    path: 'buyers',
    component: BuyersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    ) 
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
