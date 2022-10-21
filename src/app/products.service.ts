import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products=[
    {
      modal: '13',
      Id:'',
      product:[{type:'mobile',ram: 6,color:'black',storage:256}],
      brand:'apple',
      amount: 7,
      price: 999
    },
    {
      modal: '13 pro',
      Id:'',
      product:[{type:'mobile',ram:4,color:'white',storage:512}],
      brand:'apple',
      amount: 8,
      price:1099
    },
    {
      modal: '13 pro max',
      Id:'',
      product:[{type:'mobile',ram:4,color:'blue',storage:512}],
      brand:'apple',
      amount:3,
      price:1199
    },
    {
      modal: 'S 21',
      Id:'',
      product:[{type:'mobile',ram:12,color:'red',storage:512}],
      brand:'samsung',
      amount:12,
      price:999
    },
    {
      modal: 'S 21 ultra',
      Id:'',
      product:[{type:'mobile',ram:8,color:'green',storage:256}],
      brand:'samsung',
      amount:23,
      price:1199
    },
    {
      modal: 'S 21 FE',
      Id:'',
      product:[{type:'mobile',ram:12,color:'blue',storage:512}],
      brand:'samsung',
      amount:599,
      price:30
    },
    {
      modal: 'macBook air',
      Id:'',
      product:[{type:'laptop',ram:8,color:'black',storage:1000}],
      brand:'apple',
      amount:21,
      price:1099
    },
    {
      modal: 'macBook pro',
      Id:'',
      product:[{type:'laptop',ram:16,color:'golden',storage:512}],
      brand:'apple',
      amount:1999,
      price:30
    },
    {
      modal: 'vivobook',
      Id:'',
      product:[{type:'laptop',ram:16,color:'black',storage:1000}],
      brand:'asus',
      amount:31,
      price:1399
    },
    {
      modal: 'vivobook pro',
      Id:'',
      product:[{type:'laptop',ram:12,color:'blue',storage:1000}],
      brand:'asus',
      amount:1999,
      price:34
    },
    {
      modal: 'D 600',
      Id:'',
      product:[{type:'camera',ram:'',color:'black',storage:''}],
      brand:'canon',
      amount:12,
      price:966
    },
    {
      modal: 'D 700',
      Id:'',
      product:[{type:'camera',ram:'',color:'clack',storage:''}],
      brand:'canon',
      amount:34,
      price:309
    }


  ]


  constructor() { }
}
