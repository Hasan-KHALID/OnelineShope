import { Injectable } from '@angular/core';

interface MyCart{
      modal:string,
      imgPath:string,
      Id:number,
      product:string,
      brand:string,
      amount:number,
      price:number,
      ram:string,
      color:string,
      storage:string,
      type:string,
      quantity:number
}

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

  addCart:number=0
  

  myCart : MyCart[]=[]

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
      Type:string,
      quantity:number
    )
    {
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
      type:Type,
      quantity:quantity
    })
    this.addCart++

    console.log(this.myCart)
    

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
      type:'',
      quantity:0}]

      this.addCart=0
     
  }

  removeSingleItem(){
    this.myCart.pop()
    this.addCart--
  }



}
