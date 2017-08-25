import { Injectable } from '@angular/core';
import { Buyer } from '../../components/buyers/buyer';


@Injectable()
export class BuyersService {

  private newBuyer: Buyer = new Buyer('','','','');

  private buyers = [
    new Buyer(1, 'John', 'Doe', 'john@doe.com'),
    new Buyer(2, 'Sam', 'Smith', 'sam@doe.com'),
    new Buyer(3, 'George', 'Sullivan', 'george@doe.com'),
    new Buyer(4, 'John', 'Deere', 'john@doe.com'),
    new Buyer(5, 'Nick', 'Doe', 'nick@doe.com'),
  ];

  constructor() { }

  public getBuyers() {
    return this.buyers;
  }
  public addBuyer(newBuyer){
    this.buyers.push(newBuyer);
  }
}
