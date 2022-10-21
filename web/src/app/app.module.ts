import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {IvyCarouselModule} from 'angular-responsive-carousel' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
   
    UsersDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
   // IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
