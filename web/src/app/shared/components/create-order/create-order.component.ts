import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PurchaseOrderService } from 'app/services/purchase-order.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  orderForm = this.purchaseOrderSer.getOrderFormData();
  states: any = [];
  cities: any = [];
  poNumbers: any = [];
  valid: boolean = true;

  constructor(public purchaseOrderSer: PurchaseOrderService) {
    // this.purchaseOrderSer.getPoNumber().subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
    this.states = this.purchaseOrderSer.getStates().subscribe((data: any) => {
      console.log(data);
      this.purchaseOrderSer.states = data;
      this.states = data;
    });
    this.cities = this.purchaseOrderSer.getCities().subscribe((data: any) => {
      console.log(data);
      this.purchaseOrderSer.cities = data;
      this.cities = data;
    });
    this.poNumbers = this.purchaseOrderSer.getPoNumber().subscribe((data) => {
      console.log(data);
      this.purchaseOrderSer.poNumbers = data;
      this.poNumbers = data;
    });
  }

  createOrder() {
    console.log('orderForm:', this.orderForm.value);

    if (!this.orderForm.valid) {
      // alert('data are missing in some fields');
      // return;
      this.valid = false;
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
