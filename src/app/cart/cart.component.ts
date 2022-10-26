import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {

  selectedQuantity:number = 0
  itemAmount:any

  constructor(public carts: CartServiceService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

  // this.itemAmount = this.carts.myCart[this.selectedQuantity]
    
  }

  


  remove(){
    this.carts.removeSingleItem()

  }

  addQuantity(){
    this.itemAmount.quantity++
  }
  
  removeQuantity(){
    this.itemAmount.quantity--
  }


  // removeAmount(){
  //   this.amount--;
  //   this.totalAmount =  this.currentItem.price * this.amount;
  // }

}
