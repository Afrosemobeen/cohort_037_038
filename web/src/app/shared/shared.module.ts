import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
@NgModule({
  declarations: [
    CreateOrderComponent,
    UpdateOrderComponent,
    DisplayOrderComponent,
    PurchaseOrderComponent,
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  exports: [PurchaseOrderComponent],
})
export class SharedModule {}
