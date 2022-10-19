import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/user-management/users/users.component';
import { EditUserComponent } from './components/user-management/edit-user/edit-user.component';
import { DisplayUserComponent } from './components/user-management/display-user/display-user.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { UserOperationsComponent } from './components/user-management/user-operations/user-operations.component';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AddUserComponent } from './components/user-management/add-user/add-user.component';

import { NavModuleModule } from './nav-module/nav-module.module';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UsersComponent,
    EditUserComponent,
    DisplayUserComponent,
    UserOperationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    NavModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
