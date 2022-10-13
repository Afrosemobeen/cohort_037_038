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
    console.log(this.signUpForm.value);
  }
  ngOnInit(): void {}
}
