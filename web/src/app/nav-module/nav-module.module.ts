import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { NavbarEditComponent } from './components/navbar-edit/navbar-edit.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    HeaderComponent,
    NavbarEditComponent
  ]
})
export class NavModuleModule { }
