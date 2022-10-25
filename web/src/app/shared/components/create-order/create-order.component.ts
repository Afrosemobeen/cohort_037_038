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
  flag: Boolean = false;
  valid: boolean = true;
  id: any = '';
  selectedCountry: any = {
    id: '0',
    name: '',
  };

  constructor(public purchaseOrderSer: PurchaseOrderService) {}

  ngOnInit(): void {
    //this.showAll();
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

  // showAll() {
  //   this.purchaseOrderSer.getAll().subscribe((data: any) => {
  //     this.states = data;
  //     console.log(this.states);
  //   });
  // }

  // onSelect(country_id: any) {
  //   this.purchaseOrderSer.getAll().subscribe((res: any) => {
  //     (this.states = res['states'].filter(
  //       (res: any) => res.country_id == country_id!.value
  //     )),
  //       console.log(this.states);
  //   });
  // }
}
