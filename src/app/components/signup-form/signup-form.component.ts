import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signUpForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  signUp() {
    this.http
      .post<any>('http://localhost:3000/signupForm', this.signUpForm.value)
      .subscribe({
        next: (result) => {
          console.log('result', result);
          alert('Sign-up Successful !');
          this.signUpForm.reset();
        },
        error: () => {
          alert('something went wrong');
        },
      });
  }
  ngOnInit(): void {}
}
