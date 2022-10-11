import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { SharedRoutingModule } from './shared/shared-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, SharedRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
