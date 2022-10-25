import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from "./user-module/user-module.module";


import { NavModuleModule } from './nav-module/nav-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component'

@NgModule({
  declarations: [
    AppComponent,
    
    LoginFormComponent,
    SignupFormComponent,
    DashboardComponent,
    CreateUserComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    NavModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
