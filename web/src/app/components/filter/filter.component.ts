import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
usersList:any=[];
 
filterModel: any={
  fullName: '',
  title:'',
  email:'',
  phone:'',
  status: ''
 }

constructor(private router:Router,
           private userService:UserServiceService) { }

ngOnInit(): void {
}
applyFilter(){ 
  console.log(this.filterModel);
   this.userService.filterModel={...this.filterModel};
   this.userService.filterFlag="enabled"
   this.router.navigate(["/carousel"]);
}
clearFilter(){
  console.log("From clear filter");
  this.userService.filterModel={};
  this.userService.filterFlag="disabled";

}
}
