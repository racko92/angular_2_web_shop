import { Component } from '@angular/core';
import { Buyer } from './buyer';
import { BuyersService } from '../../shared/services/buyers-service.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
})
export class BuyersComponent {

  public buyers: any[];
  newBuyer: Buyer = new Buyer('','','','');
  

  constructor(private buyersService: BuyersService) { 
    this.buyers = buyersService.getBuyers();
  }

  remove(buyer){
    const index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);
  }
  addBuyer(){
    this.buyersService.addBuyer(this.newBuyer);
    this.newBuyer = new Buyer('','','','');
    
  }
}
