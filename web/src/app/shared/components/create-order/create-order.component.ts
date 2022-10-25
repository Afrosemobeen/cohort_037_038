import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
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
  maxDate: any;
  flag: Boolean = false;
  valid: boolean = true;
  id: any = '';

  constructor(public purchaseOrderSer: PurchaseOrderService) {}

  ngOnInit(): void {
    this.futureDateDisable();

    this.states = this.purchaseOrderSer.getStates().subscribe((data: any) => {
      this.purchaseOrderSer.states = data;
      this.states = data;
    });
    this.cities = this.purchaseOrderSer.getCities().subscribe((data: any) => {
      this.purchaseOrderSer.cities = data;
      this.cities = data;
    });
    this.poNumbers = this.purchaseOrderSer.getPoNumber().subscribe((data) => {
      this.purchaseOrderSer.poNumbers = data;
      this.poNumbers = data;
    });
  }

  futureDateDisable() {
    var date: any = new Date();
    var todaydate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();
    if (todaydate < 10) {
      todaydate = '0' + todaydate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.maxDate = year + '-' + month + '-' + todaydate;
  }

  selectedPo(e: any) {
    this.id = e.target.value;
  }

  createOrder() {
    const found = this.purchaseOrderSer.orderList.some(
      (el: any) => el.po_num === this.id
    );
    if (!found) {
      this.flag = false;
      console.log('orderForm:', this.orderForm.value);

      if (!this.orderForm.valid) {
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
    } else {
      this.flag = true;
      console.log('Ponumber exists');
    }
  }

  clearForm() {
    this.orderForm.reset();
  }
}
