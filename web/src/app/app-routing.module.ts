import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarEditComponent } from './nav-module/components/navbar-edit/navbar-edit.component';

const routes: Routes = [
  {path: 'nav-edit' ,component:NavbarEditComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
