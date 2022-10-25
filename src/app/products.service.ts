import { Injectable, OnChanges, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {

  // currentItem:any;
  currentProduct: number = 1
  products=[
    {
      modal: 'Iphone 13',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20210927_1632733268_719979.png',
      Id: this.guid(),
      product:'mobile',
      brand:'apple',
      amount: 7,
      price: 999,
      ram:'6',
      color:'black',
      storage:'256',
      type: 'all-product'
    },
    {
      modal: 'Iphone 13 pro',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220328_1648464644_936918.png',
      Id:this.guid(),
      product:'mobile',
      brand:'apple',
      amount: 8,
      price:1099,
      ram: '6',
      color:'black',
      storage:'512',
      type: 'all-product'
    },
    {
      modal: 'Iphone 13 pro max',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220328_1648464562_431145.png',
      Id:this.guid(),
      product:'mobile',
      brand:'apple',
      amount:3,
      price:1199,
      ram: '8',
      color:'black',
      storage:'512',
      type: 'all-product'
    },
    {
      modal: 'Samsung S 21',
      imgPath:this.guid(),
      Id:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220117_1642398692_412261.png',
      product:'mobile',
      brand:'samsung',
      amount:12,
      price:999,
      ram: '8',
      color:'black',
      storage:'512',
      type: 'all-product'
    },
    {
      modal: 'Samsung S 21 ultra',
      imgPath:this.guid(),
      Id:'',
      product:'mobile',
      brand:'samsung',
      amount:23,
      price:1199,
      ram:'8',
      color:'green',
      storage:'256',

      type: 'all-product'
    },
    {
      modal: 'Samsung S 21 FE',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220420_1650444296_941710.png',
      Id:this.guid(),
      product:'mobile',
      brand:'samsung',
      amount:599,
      price:30,
      ram:'12',
      color:'blue', 
      storage:'512',

      type: 'all-product'
    },
    {
      modal: 'macBook air',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20221001_1664602208_517055.jpeg',
      Id:this.guid(),
      product:'laptop',
      brand:'apple',
      amount:21,
      price:1099,
      ram:'8',
      color:'black',
      storage:'1000',

      type: 'all-product'
    },
    {
      modal: 'macBook pro',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220716_1657947909_290141.jpeg',
      Id:this.guid(),
      product:'laptop',
      brand:'apple',
      amount:1999,
      price:30,
      ram:'16',
      color:'golden',
      storage:'512',

      type: 'all-product'
    },
    {
      modal: 'playstation5',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220112_1641985872_469486.jpeg',
      Id:this.guid(),
      product:'console',
      brand:'sony',
      amount:31,
      price:499,
      ram:'16',
      color:'black',
      storage:'1000',

      type: 'all-product'
    },
    {
      modal: 'gamepad',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220113_1642052594_412206.jpeg',
      Id:this.guid(),
      product:'accessories',
      brand:'sony',
      amount:1999,
      price:34,
      ram:'',
      color:'blue',
      storage:'',
      type: 'all-product'
    },
    {
      modal: 'insta360',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220611_1654928486_641202.jpeg',
      Id:this.guid(),
      product:'camera',
      brand:'insta',
      amount:12,
      price:266,
      ram:'',
      color:'white',
      storage:'',
      type: 'all-product'
    },
    {
      modal: 'dji action 2',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20211202_1638427073_887338.png',
      Id:this.guid(),
      product:'camera',
      brand:'dji',
      amount:34,
      price:109,
      ram:'',
      color:'clack',
      storage:'',

      type: 'all-product'
    }


  ]


  constructor() {

   }

   guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

  

  
}
