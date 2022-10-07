import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    DisplayOrderComponent,
    PurchaseOrderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
