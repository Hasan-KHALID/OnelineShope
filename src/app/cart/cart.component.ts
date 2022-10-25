import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  quantity:number = 1
  itemAmount=0

  constructor(public carts: CartServiceService) { }

  ngOnInit(): void {
  }


  remove(){
    this.carts.removeSingleItem()

  }

  addQuantity(){
    this.quantity++
  }
  
  removeQuantity(){
    this.quantity--
  }


  // removeAmount(){
  //   this.amount--;
  //   this.totalAmount =  this.currentItem.price * this.amount;
  // }

}
