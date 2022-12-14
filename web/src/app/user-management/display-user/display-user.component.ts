import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from '../../services/user-service.service';
import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent implements OnInit {
  usersList:any=[];
  searchText:any ="";
  @Output() onUserEditEvent : EventEmitter<any>
  constructor(public userService: UserServiceService,
              private dialog:MatDialog) { 
              this.onUserEditEvent= new EventEmitter()
              }

  ngOnInit(): void {
    console.log("searchText",this.usersList);
    
    this.userService.getAllUsers()
    .subscribe({
        next: (data: any)=>{
         console.log("data: ",data);
         this.userService.usersList = data;
         this.usersList = data
        // console.log("UsersList: ", this.usersList);
         
       },
       error: ()=>{},
       complete: ()=>{}
      })
  }
  deleteEmployee(id: any){
    // alert(id)
     this.userService.deleteUser(id)
     .subscribe({
       next:(result)=>{
       //  this.toastr.error('deleting employee','deleted' );
         this.userService.getAllUsers()
     .subscribe({
         next: (data: any)=>{
          console.log("data: ",data);
         this.userService.usersList = data;
          this.usersList=data
          console.log("usersList",this.userService.usersList);
          
        },
        error: ()=>{},
        complete: ()=>{}
       })
       },
       error:()=>{},
       complete:()=>{}
     })
   }
   editUsers(user :any){
    
        this.onUserEditEvent.emit(user)
        console.log("user :",user);
   }
  //  items:any=[];
  //  sort:any;
  //  getSortFullName(){
  //   console.log("userList: ",this.usersList);
  //   for(let item of this.usersList){
  //     console.log("item:", item);
  //     const { fullName}= item
  //     console.log("second", fullName);
  //     this.items.push(fullName)
  //     console.log("items:", this.items);
  //     this.items =  this.items.sort();
  //     console.log("sort:", this.items);
      
  //   }

  //  }
  key:string='id';
  reverse:boolean=false;
  sort(key:any){
    this.key = key;
    this.reverse = !this.reverse
  }

}
