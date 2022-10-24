import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  num!:number;
  Subtotal=0
  itemAmount=0

  constructor(public carts: CartServiceService) { }

  ngOnInit(): void {
  }

  addAmount(){
    this.itemAmount = this.carts.myCart[this.num].amount++;
    this.Subtotal =  this.carts.myCart[this.num].price * this.carts.myCart[this.num].amount;
    
  }

  // removeAmount(){
  //   this.amount--;
  //   this.totalAmount =  this.currentItem.price * this.amount;
  // }

}
