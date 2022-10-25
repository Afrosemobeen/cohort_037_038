import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  errMessage= "";
  submitted = false;
  constructor(private loginSer: LoginService,private fb: FormBuilder,
     private http: HttpClient, private router: Router, private toastr: ToastrService) { 
    this.loginForm =  this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    }
    );
  }

  ngOnInit(): void {
  }
  login(){
    this.submitted = true;
    if(!this.loginForm.valid){
      alert("data is missing for some fields");
      return;
    }
    this.loginSer.checkLogin(this.loginForm.value)
    .subscribe({
      next: (result:any)=>{
         console.log("result: ", result);

      if(result.length>0){
        //alert("You are successfully logged in");
        //this.errMessage = "You are successfully logged in";
        this.toastr.success('You are successfully logged in');
         this.loginForm.reset();
         this.router.navigate(['nav-edit']);
       }
       else{
        this.errMessage = "Invalid username or password";
       // alert("Invalid username or password");
       }
      },
        error: ()=>{
          alert("Something went wrong");
        },
        complete: ()=>{}
      })
  }
  }


