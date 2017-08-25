import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyersService } from '../../../shared/services/buyers-service.service';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html'
})

export class PurchasesComponent implements OnInit {

  private buyer: any;

  constructor(private route: ActivatedRoute,
              private buyers: BuyersService) { }
    
  ngOnInit() {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.buyer = this.buyers.getBuyer(id);
  }
}

