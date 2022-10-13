import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> cd28361f8bb34319f73a8d33340face0c7daf117
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, LoginFormComponent, SignupFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
