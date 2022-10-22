import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  @Input() currentProduct: number = 0;
  currentItem:any;

  constructor( public product: ProductsService) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.currentItem = this.product.products[this.currentProduct]
    // this.route.navigate(['item'])
  }

}
