import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images=[
  "https://static.gadgetandgear.com/tmp/slider/20221015_1665825281_979283.png", 
  "https://static.gadgetandgear.com/tmp/slider/20221014_1665721412_116633.png"
]

  constructor() { }

  ngOnInit(): void {
  } 

}
