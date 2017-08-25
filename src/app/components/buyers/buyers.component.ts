import { Component } from '@angular/core';
import { Buyer } from './buyer';
import { BuyersService } from '../../shared/services/buyers-service.service';
@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
})
export class BuyersComponent {

  private buyers: any[];

  constructor(buyersService: BuyersService) { 
    this.buyers = buyersService.getBuyers();
  }

  remove(buyer){
    const index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);
  } 
}
