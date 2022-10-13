import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  po_number: any = '';
  date: any;
  total_amount: string = '';
  username: string = '';
  desc: string = '';
  state: string = '';
  city: string = '';
  ponum: any = [];
  pucharseList = [];
  constructor(private purchaseOrderSer: PurchaseOrderService) {}

  ngOnInit(): void {
    this.ponum = this.purchaseOrderSer.poNumber();
    console.log(this.ponum);
  }

  createOrder() {
    if (
      !this.po_number ||
      !this.date ||
      !this.total_amount ||
      !this.username ||
      !this.desc ||
      !this.state ||
      !this.city
    ) {
      alert('data for some field is missing');
    }

    const orderData = {
      po_number: this.po_number,
      date: this.date,
      total_amount: this.total_amount,
      username: this.username,
      desc: this.desc,
      state: this.state,
      city: this.city,
    };
    console.log('Order Data', orderData);
    this.purchaseOrderSer.purchaseList().push(orderData);
    console.log(this.pucharseList);
  }

  clearForm() {
    this.po_number = '';
    this.date = '';
    this.total_amount = '';
    this.username = '';
    this.desc = '';
    this.state = '';
    this.city = '';
  }
}
