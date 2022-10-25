import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from 'app/components/login-form/login-form.component';
import { SignupFormComponent } from 'app/components/signup-form/signup-form.component';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    // LoginFormComponent,
    // SignupFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ]
})
export class LoginModule { }
