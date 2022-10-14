import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators , FormBuilder} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.scss']
})
export class EditUserDetailsComponent implements OnInit {
  @Input() name: any;
  status:any;
  @Output() onCancelUpdateEvent: EventEmitter<any>
  userForm= this.fb.group({
    _id: ['', [Validators.required]],
    fullName: ['', [Validators.required, Validators.maxLength(50)]],
    displayName: ['', [Validators.required, Validators.maxLength(50)]],
    title: ['', [Validators.required]],
    userLevel: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required,Validators.maxLength(10)]],
    status: ['', [Validators.required]],
  });
  constructor(private userService: UserServiceService,
    private fb: FormBuilder,public activeModal: NgbActiveModal) { 
      this.onCancelUpdateEvent = new  EventEmitter();
            
    }

  ngOnInit(): void {
    console.log("name:", this.name);
    this.userForm.setValue({...this.name})
    console.log("userForm",this.userForm);
  }

  closeDialog(){
   // this.dialogRef.close(false)
 }

 updateEmployee(){
   console.log("user: ", this.userForm.value);
   this.userService.updateUser(this.userForm.value)
   .subscribe({
    next: (result)=>{
     console.log("result: ", result);
    this.userService.getAllUsers()
      .subscribe({
       next: (data: any)=>{
        console.log("data: ", data);
        this.userService.usersList = data;
         
      },
      error: ()=>{},
      complete: ()=>{}
     })
   },
   error: ()=>{},
   complete: ()=>{},
 })
 }
 cancelUpdateForm(){
   this.onCancelUpdateEvent.emit();
 }
 statusActive(){
  console.log("status:", this.userForm.controls['status'].value);
  this.userForm.patchValue({status:'Active'})
  this.status = this.userForm.controls['status'].value
  console.log("active",this.status);
  
 }
 statusInactive(){
   console.log("status:", this.userForm.controls['status'].value);
   this.userForm.patchValue({status:'Inactive'})
   this.status = this.userForm.controls['status'].value
   console.log("inactive",this.status);
   
  }

}
