import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> fa1a8ab95445dcb6352ade5e7ae546bc1c95a84e
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, SignupFormComponent],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
=======
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
>>>>>>> fa1a8ab95445dcb6352ade5e7ae546bc1c95a84e
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
