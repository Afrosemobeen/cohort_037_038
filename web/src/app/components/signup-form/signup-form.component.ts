import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm =  this.fb.group({
      username: [''],
      password: [''],
     
    }
    );
   }

  ngOnInit(): void {
  }
signUp(){

}
}
