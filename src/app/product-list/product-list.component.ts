import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  id=''

  // currentProduct: number = 0

  constructor(public product: ProductsService, public route:ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id']

    this.route.params.subscribe((params:Params) => {

      this.id = params['id']

    })
  }

}
