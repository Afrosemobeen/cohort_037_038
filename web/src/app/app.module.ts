import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModuleModule } from './nav-module/nav-module.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginModule } from './login-module/login/login.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from 'app/components/login-form/login-form.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NavModuleModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
