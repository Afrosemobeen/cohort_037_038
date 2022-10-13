import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    this.loginForm =  this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
     
    }
    );
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
