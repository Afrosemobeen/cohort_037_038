import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOperationsComponent } from '../user-management/user-operations/user-operations.component';
import { DisplayUserComponent } from '../user-management/display-user/display-user.component';
 import { UsersComponent } from '../user-management/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon'
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    UserOperationsComponent,
    DisplayUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    Ng2OrderModule
  ],
  exports: [
     UserOperationsComponent,
    DisplayUserComponent,
     UsersComponent,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    Ng2OrderModule

  ]
})
export class UserModuleModule { }
