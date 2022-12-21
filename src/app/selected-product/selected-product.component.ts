import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  id = 0

  // currentProduct: number = 0;
    currentItem:any;

  constructor( public product: ProductsService, 
    public route: ActivatedRoute, 
    public cart: CartServiceService, 
    public router: Router) {
    //  console.log(this.product.currentProduct)
   }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id']
    // console.log(this.product.currentProduct)
    this.route.params.subscribe((params: Params) =>{
      this.id =params['id']
    })
    this.currentItem = this.product.products[this.id]
  
  }
  
    // this.route.navigate(['item'])

    addCart(){
        this.cart.addItem(
        this.currentItem.modal,
        this.currentItem.imgPath, 
        this.currentItem.Id,
        this.currentItem.product,
        this.currentItem.brand,
        this.currentItem.amount,
        this.currentItem.price,
        this.currentItem.ram,
        this.currentItem.color,
        this.currentItem.storage,
        this.currentItem.type,
        this.currentItem.quantity
        );
        // this.router.navigate(['/cart'])


    }

    byeNow(){
       this.cart.addItem(
        this.currentItem.modal,
        this.currentItem.imgPath, 
        this.currentItem.Id,
        this.currentItem.product,
        this.currentItem.brand,
        this.currentItem.amount,
        this.currentItem.price,
        this.currentItem.ram,
        this.currentItem.color,
        this.currentItem.storage,
        this.currentItem.type,
        this.currentItem.quantity
        );

        this.router.navigate(['/checkout'])


    }


  

}
