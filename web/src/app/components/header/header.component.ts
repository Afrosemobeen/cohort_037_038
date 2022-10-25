import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formFlag = "carousel";
  saveDetails:any
  constructor() { }

  ngOnInit(): void {
  }
  details(data:any)
  {
    console.log("header data: ", data);
    this.saveDetails = data;
    this.formFlag = "users-details"

  }
  closeDetail(){
    this.formFlag = "carousel";
  }
}
  
