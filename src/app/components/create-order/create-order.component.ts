import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  po_number: String = '';
  date: any;
  total_amount: Number | undefined;
  username: String = '';
  desc: string = '';
  state: String = '';
  city: String = '';

  constructor() {}

  ngOnInit(): void {}

  createOrder() {
    console.log(this.po_number);
    console.log(this.date);
    console.log(this.total_amount);
    console.log(this.username);
    console.log(this.desc);
    console.log(this.state);
    console.log(this.city);

    //console.log('Order Data', orderData);

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
  }

  clearForm() {
    this.po_number = '';
    this.date = '';
    this.total_amount = undefined;
    this.username = '';
    this.desc = '';
    this.state = '';
    this.city = '';
  }
}
