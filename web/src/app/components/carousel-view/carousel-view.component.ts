
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css']
})
export class CarouselViewComponent implements OnInit {


  @Output() onPassDetailEmit : EventEmitter<any> = new EventEmitter()
  formFlag="carousel"
  usersList: any=[];
 
  constructor(private router:Router,
              private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe({
        next: (data: any)=>{
         console.log("data: ",data);
         this.userService.usersList = data;
         this.usersList = data
         console.log("usersList", this.usersList);
         console.log("filterFlag: ",this.userService.filterFlag );
         console.log("filterModel: ",this.userService.filterModel );
         if(this.userService.filterFlag=="enabled") {
               this.usersList=data.filter((user:any)=>( this.userService.filterModel.fullName? user.fullName.includes(this.userService.filterModel.fullName ):false ||
                                                       this.userService.filterModel.title? user.title.includes(this.userService.filterModel.title): false ||
                                                       this.userService.filterModel.phone? user.phone.includes(this.userService.filterModel.phone) : false ||
                                                       this.userService.filterModel.email? user.email.includes(this.userService.filterModel.email) : false ||
                                                       this.userService.filterModel.status? user.status.includes(this.userService.filterModel.status) : false
                )
               )
               console.log("usersList:",this.usersList);
               
              }
       },
       error: ()=>{},
       complete: ()=>{}
      })
  }

passDetails(data:any){
  console.log("data:",data);
  this.onPassDetailEmit.emit(data)
}
clearFilter(){
  console.log("From clear filter");
  this.userService.filterModel={};
  this.userService.filterFlag="disabled"
  this.router.navigate(["/carousel"]);
}
}


