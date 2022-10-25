import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  enteredSearchValue:string = ''
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()
  

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  
 onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue)
  console.log(this.enteredSearchValue)
  this.router.navigate(['/product-list/',this.enteredSearchValue])

 }
  
}
