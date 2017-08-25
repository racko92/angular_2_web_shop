import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { PurchasesComponent } from './components/buyers/purchases/purchases.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/buyers',
  //   pathMatch: 'full'
  // },
  {
    path: 'buyers',
    component: BuyersComponent,
    children:[
      {
        path: ':id',
        component: PurchasesComponent,
      }
    ]
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
