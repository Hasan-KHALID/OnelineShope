import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products=[
    {
      modal: '13',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20210927_1632733268_719979.png',
      Id:'',
      product:[{type:'mobile',ram: 6,color:'black',storage:256}],
      brand:'apple',
      amount: 7,
      price: 999
    },
    {
      modal: '13 pro',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220328_1648464644_936918.png',
      Id:'',
      product:[{type:'mobile',ram:4,color:'white',storage:512}],
      brand:'apple',
      amount: 8,
      price:1099
    },
    {
      modal: '13 pro max',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220328_1648464562_431145.png',
      Id:'',
      product:[{type:'mobile',ram:4,color:'blue',storage:512}],
      brand:'apple',
      amount:3,
      price:1199
    },
    {
      modal: 'S 21',
      imgPath:'',
      Id:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220117_1642398692_412261.png',
      product:[{type:'mobile',ram:12,color:'red',storage:512}],
      brand:'samsung',
      amount:12,
      price:999
    },
    {
      modal: 'S 21 ultra',
      imgPath:'',
      Id:'',
      product:[{type:'mobile',ram:8,color:'green',storage:256}],
      brand:'samsung',
      amount:23,
      price:1199
    },
    {
      modal: 'S 21 FE',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220420_1650444296_941710.png',
      Id:'',
      product:[{type:'mobile',ram:12,color:'blue',storage:512}],
      brand:'samsung',
      amount:599,
      price:30
    },
    {
      modal: 'macBook air',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20221001_1664602208_517055.jpeg',
      Id:'',
      product:[{type:'laptop',ram:8,color:'black',storage:1000}],
      brand:'apple',
      amount:21,
      price:1099
    },
    {
      modal: 'macBook pro',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220716_1657947909_290141.jpeg',
      Id:'',
      product:[{type:'laptop',ram:16,color:'golden',storage:512}],
      brand:'apple',
      amount:1999,
      price:30
    },
    {
      modal: 'playstation5',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220112_1641985872_469486.jpeg',
      Id:'',
      product:[{type:'console',ram:16,color:'black',storage:1000}],
      brand:'sony',
      amount:31,
      price:499
    },
    {
      modal: 'gamepad',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220113_1642052594_412206.jpeg',
      Id:'',
      product:[{type:'accessories',ram:'',color:'blue',storage:''}],
      brand:'sony',
      amount:1999,
      price:34
    },
    {
      modal: 'insta360',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20220611_1654928486_641202.jpeg',
      Id:'',
      product:[{type:'camera',ram:'',color:'white',storage:''}],
      brand:'insta',
      amount:12,
      price:266
    },
    {
      modal: 'dji action 2',
      imgPath:'https://static.gadgetandgear.com/image/250x250/fit/tmp/product/20211202_1638427073_887338.png',
      Id:'',
      product:[{type:'camera',ram:'',color:'clack',storage:''}],
      brand:'dji',
      amount:34,
      price:109
    }


  ]


  constructor() { }
}
