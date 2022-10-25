import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  myCart =[{modal:'',
      imgPath:'',
      Id:0,
      product:'',
      brand:'',
      amount:0,
      price:0,
      ram:'',
      color:'',
      storage:'',
      type:''}]

  constructor() { }

  addItem( 
      Modal:string,
      ImgPath:string,
      Id:number,
      Product:string,
      Brand:string,
      Amount:number,
      Price:number,
      Ram:string,
      Color:string,
      Storage:string,
      Type:string
    ){

    this.myCart.push(
      {
      modal:Modal, 
      imgPath:ImgPath, 
      Id:Id, 
      product:Product,
      brand:Brand, 
      amount:Amount, 
      price:Price,
      ram:Ram, 
      color:Color,
      storage:Storage,
      type:Type
    })
    

  }

  removeItem(){
    this.myCart =[{modal:'',
      imgPath:'',
      Id:0,
      product:'',
      brand:'',
      amount:0,
      price:0,
      ram:'',
      color:'',
      storage:'',
      type:''}]
     
  }

}