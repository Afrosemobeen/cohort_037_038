import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup<any>;
  submitted = false;
  constructor(
    private loginSer: LoginService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
  login() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      alert('data is missing for some fields');
      return;
    }
    this.loginSer.getUser().subscribe({
      next: (result: any) => {
        const user = result.find((a: any) => {
          return (
            a.username === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('You are successfully logged in');
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        } else {
          alert('Invalid username or password');
        }
      },
      error: () => {
        alert('Something went wrong');
      },
      complete: () => {},
    });
  }
}
