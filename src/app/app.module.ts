import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, SignupFormComponent],

  // imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],

  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
