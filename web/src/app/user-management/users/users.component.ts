import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from '../../services/user-service.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // fullName="";
  // displayName="";
  // title="";
  // userLevel="";
  // email="";
  // phone="";
  // status=""
  // userData:any=[]
  // userForm= this.fb.group({
  //   fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
  //   displayName: ['', [Validators.required]],
  //   title: ['', [Validators.required]],
  //   userLevel: ['', [Validators.required, Validators.min(20000), Validators.max(200000)]],
  //   email: ['', [Validators.required]],
  //   phone: ['', [Validators.required]],
  //   status: ['', [Validators.required]],
  // });
  // constructor(private fb : FormBuilder,
  //             private userService: UserServiceService) { }

  // ngOnInit(): void {
  // }

  // // saveUser(data:NgForm){
  // //   console.log("data :",data);
  // //   this.userData.push(data);
  // //   console.log("userData : ",this.userData);
    
  // saveUser(){
  //   console.log("user :", this.userForm.value);
    
  //   if(!this.userForm.valid){
  //     alert("data is missing for some fields")
  //     return;
  //   }
  //   const userData={
  //     ...this.userForm.value 
  //   }
  //   console.log("employee: ",userData);
    
  //   this.userService.createUser(userData)
  //   .subscribe({
  //     next: (result)=>{
  //       console.log("result: ",result);
  //       this.clearForm()
  //       this.userService.getAllUsers()
  //        .subscribe({
  //         next: (data: any)=>{
  //          console.log("data: ",data);
  //          this.userService.usersList= data;
            
  //        },
  //        error: ()=>{},
  //        complete: ()=>{}
  //       })
  //     },
  //     error:()=>{},
  //     complete:()=>{},
  //   })
    
  // }
  // clearForm(){
  //   this.userForm.reset()
  // }

  fullName: FormControl 
  displayName: FormControl 
  title:FormControl
  userLevel:FormControl
  email: FormControl 
  phone:FormControl
  status: FormControl 
  constructor(private userService: UserServiceService,
    private modalService: NgbModal,
    private dialog:MatDialog) {
            this.fullName = new FormControl('',[Validators.required]),
            this.displayName = new FormControl('',[Validators.required]),
            this.title = new FormControl('',[Validators.required]),
            this.userLevel = new FormControl('',[Validators.required]),
            this.email = new FormControl('',[Validators.required]),
            this.phone = new FormControl('',[Validators.required]),
            this.status = new FormControl('',[Validators.required])
           // console.log("ename : ",this.fullName.value);
           // this.ename = this.ename.value
           // return 
      
     }


ngOnInit(): void {
}


clearForm(){
this.fullName.reset()
this.displayName.reset()
this.title.reset()
this.userLevel.reset()
this.email.reset()
this.phone.reset()
this.status.reset()
}


open() {
  const modalRef = this.modalService.open(CreateUserComponent);
  modalRef.componentInstance.name = 'World';
}


}
