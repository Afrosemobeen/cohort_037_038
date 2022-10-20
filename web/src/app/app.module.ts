import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavModuleModule } from './nav-module/nav-module.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
