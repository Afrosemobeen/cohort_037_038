import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarEditComponent } from './nav-module/components/navbar-edit/navbar-edit.component';


import { SignupFormComponent } from './components/signup-form/signup-form.component';
import {LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  {path: "signup", component: SignupFormComponent},
  {path: "login", component: LoginFormComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: 'nav-edit' ,component:NavbarEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
