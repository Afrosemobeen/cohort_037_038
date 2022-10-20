import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { NavbarEditComponent } from './components/navbar-edit/navbar-edit.component';
import { AppRoutingModule } from 'app/app-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    NavbarEditComponent
  ]
})
export class NavModuleModule { }
