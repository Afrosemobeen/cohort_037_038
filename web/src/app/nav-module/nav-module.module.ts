import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { NavbarEditComponent } from './components/navbar-edit/navbar-edit.component';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    NavbarEditComponent
  ]
})
export class NavModuleModule { }
