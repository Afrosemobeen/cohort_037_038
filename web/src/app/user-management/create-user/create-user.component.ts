import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  fullName: FormControl 
  displayName: FormControl 
  title:FormControl
  userLevel:FormControl
  email: FormControl 
  phone:FormControl
  status: FormControl 
  constructor(private userService: UserServiceService,
    public activeModal: NgbActiveModal) {
            this.fullName = new FormControl('',[Validators.required, Validators.maxLength(50)]),
            this.displayName = new FormControl('',[Validators.required, Validators.maxLength(50)]),
            this.title = new FormControl('',[Validators.required]),
            this.userLevel = new FormControl('',[Validators.required]),
            this.email = new FormControl('',[Validators.required, Validators.email]),
            this.phone = new FormControl('',[Validators.required, Validators.maxLength(10)]),
            this.status = new FormControl('Active',[Validators.required])
           // console.log("ename : ",this.fullName.value);
           // this.ename = this.ename.value
           // return 
      
     }
     


ngOnInit(): void {
}

saveUser(){

console.log("fullName: ", this.fullName.value);
console.log("displayName: ", this.displayName.value);
console.log("title: ", this.title.value);
console.log("userLevel: ", this.userLevel.value);
console.log("email: ", this.email.value);
console.log("phone: ", this.phone.value);
console.log("status: ", this.status.value);
if(!this.fullName.value || !this.displayName.value || !this.title.value  || !this.userLevel.value  || !this.email.value || !this.phone.value  || !this.status.value ){
alert("data is missing for some fields")
return;
}
const user={
fullName: this.fullName.value,
displayName: this.displayName.value,
title: this.title.value,
userLevel: this.userLevel.value,
email: this.email.value,
phone: this.phone.value,
status:this.status.value
}
console.log("user: ",user);

this.userService.createUser(user)
.subscribe({
next: (result)=>{
console.log("result: ",result);
this.clearForm()
this.userService.getAllUsers()
.subscribe({
next: (data: any)=>{
console.log("data: ",data);
this.userService.usersList = data;

},
error: ()=>{},
complete: ()=>{}
})
},
error:()=>{},
complete:()=>{},
})

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
}