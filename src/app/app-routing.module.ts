import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';

const routes: Routes = [
  {
    path:'location', component: LocationComponent
  },
  {
    path:'product-list/:id', component: ProductListComponent
  },
  // {
  //   path: 'selected', component: SelectedProductComponent
  // },
  {
    path: 'selected-product/:id', component: SelectedProductComponent
  },
  // {
  //   path:'apple', component: ProductListComponent
  // },
  {
    path:'cart', component: CartComponent
  },
  {
    path: '', component: HomeComponent
  },
  { 
    path: '**', component: NotFoundComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
