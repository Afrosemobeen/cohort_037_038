import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  orderForm = this.purchaseOrderSer.getOrderFormData();
  ponum: any = [];
  states: any = [];
  cities: any = [];
  constructor(private purchaseOrderSer: PurchaseOrderService) {}

  ngOnInit(): void {
    this.ponum = this.purchaseOrderSer.poNumber();
    this.states = this.purchaseOrderSer.states();
    this.cities = this.purchaseOrderSer.cities();
  }

  createOrder() {
    console.log('orderForm:', this.orderForm.value);

    if (!this.orderForm.valid) {
      alert('data are missing in some fields');
      return;
    }
    const order = {
      ...this.orderForm.value,
    };
    this.purchaseOrderSer.createOrder(order).subscribe({
      next: (result: any) => {
        this.clearForm();
        this.purchaseOrderSer.getAllOrders().subscribe({
          next: (data: any) => {
            console.log('data:', data);
            this.purchaseOrderSer.orderList = data;
          },
          error: () => {},
          complete: () => {},
        });
      },
      error: () => {},
      complete: () => {},
    });
  }

  clearForm() {
    this.orderForm.reset();
  }
}
