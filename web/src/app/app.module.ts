import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselViewComponent } from './components/carousel-view/carousel-view.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component'; import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';
;


@NgModule({
  declarations: [
    AppComponent,
    NextDirective,
    PrevDirective,
    CarouselViewComponent,
    UsersDetailsComponent,
    FilterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
