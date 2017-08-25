import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { KupciComponent } from './components/kupci/kupci.component';
import { ProizvodiComponent} from './components/proizvodi/proizvodi.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/kupci',
  //   pathMatch: 'full'
  // },
  {
    path: 'kupci',
    component: KupciComponent,
  },
  {
    path: 'proizvodi',
    component: ProizvodiComponent,
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
