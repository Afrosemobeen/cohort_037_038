import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  
  signupForm: FormGroup;
  submitted = false;
  constructor(private loginSer: LoginService,private fb: FormBuilder, private http: HttpClient) { 
    this.signupForm =  this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    }
    );
  }

  ngOnInit(): void {
  }
  signUp(){
    // console.log(this.signupForm.value);
    this.submitted = true;
    if(!this.signupForm.controls['username'].value || !this.signupForm.controls['password'].value){
      alert("data is missing for some fields");
      return;
    }
    const user = {
      ...this.signupForm.value
    }
    console.log("user",user);
    this.loginSer.createUser(user)
    .subscribe({
      next: (result)=>{
      //   if (result.find(x => x.username === user.username)) {
      //     alert("Username already exists");
      // }
      // const user = result.find((a:any)=>{
      //   if(a.username === this.signupForm.value.email) {
      //     alert("Username already exists");
      //   }
      // })
        console.log("result:", result);
        alert("sign up successful");
        this.signupForm.reset();
      },
        error: ()=>{
          alert("Something went wrong");
        },
        complete: ()=>{}
      })
  }
}