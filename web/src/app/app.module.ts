import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // MatIconModule,
    // MatDialogModule,
    BrowserAnimationsModule,
    // Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
