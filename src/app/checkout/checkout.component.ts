import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order = false

  constructor(public carts:CartServiceService) { }

  ngOnInit(): void {
  }

  orderDone(){
    this.order =true
    this.carts.removeItem()
  }

}
