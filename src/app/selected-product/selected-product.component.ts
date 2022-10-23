import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor( public product: ProductsService, public route: ActivatedRoute) {
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


  

}
