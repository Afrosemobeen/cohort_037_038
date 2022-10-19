import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarEditComponent } from './components/navbar-edit/navbar-edit.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavModuleModule { }
