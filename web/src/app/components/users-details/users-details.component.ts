import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  formFlag="users-details"
  @Input() users:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  closeDetail(){
    //console.log("hii");
    // this.formFlag="carousel";
    this.router.navigate(["/carousel"])
  }

}
