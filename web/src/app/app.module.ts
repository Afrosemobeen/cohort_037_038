import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from "./user-module/user-module.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './user-management/create-user/create-user.component';
import { EditUserDetailsComponent } from './user-management/edit-user-details/edit-user-details.component'
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
