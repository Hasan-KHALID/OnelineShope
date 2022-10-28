import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectedQuantity:number = 0
  itemAmountAdded =1
  itemAmountRemoved=1

  constructor(public carts: CartServiceService) { }

  ngOnInit(): void {
    
  }
  


  remove(){
    this.carts.removeSingleItem()

  }

  addQuantity(){
    // this.itemAmount.quantity++
    // this.selectedQuantity+1
    // console.log(this.selectedQuantity)
    this.itemAmountAdded = this.carts.myCart[this.selectedQuantity].quantity++
  }
  
  removeQuantity(){
    // this.itemAmount.quantity--
    // this.selectedQuantity-1
    // console.log(this.selectedQuantity)
    this.itemAmountRemoved = this.carts.myCart[this.selectedQuantity].quantity--
  }


  // removeAmount(){
  //   this.amount--;
  //   this.totalAmount =  this.currentItem.price * this.amount;
  // }

}
