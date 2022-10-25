import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/services/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  
  signupForm: FormGroup;
  errMessage= "";
  submitted = false;
  constructor(private loginSer: LoginService,private fb: FormBuilder, 
    private http: HttpClient,  private router: Router, private toastr: ToastrService) { 
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
        if(result.status === "failed"){
          this.errMessage = "This user or email already existed"
          return;
        }
      this.errMessage = "";
        console.log("result:", result);
        //alert("sign up successful");
        this.toastr.success("Signed up successfully!");
        this.router.navigate(['login']);
        this.signupForm.reset();
      },
        error: ()=>{
          alert("Something went wrong");
        },
        complete: ()=>{}
      })
  }
}