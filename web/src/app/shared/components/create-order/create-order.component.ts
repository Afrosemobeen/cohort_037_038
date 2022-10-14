import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  po_num: String = '';
  date: String = '';
  total_amt: string = '';
  username: string = '';
  desc: string = '';
  state: string = '';
  city: string = '';
  // ponum: any = [];

  constructor(private purchaseOrderSer: PurchaseOrderService) {}

  ngOnInit(): void {
    // this.ponum = this.purchaseOrderSer.poNumber();
    // console.log(this.ponum);
  }

  createOrder() {
    console.log('ponumber: ', this.po_num);
    console.log('date: ', this.date);
    console.log('total: ', this.total_amt);
    console.log('user: ', this.username);
    console.log('description: ', this.desc);
    console.log('state: ', this.state);
    console.log('city: ', this.city);

    if (
      !this.po_num ||
      !this.date ||
      !this.total_amt ||
      !this.username ||
      !this.desc ||
      !this.state ||
      !this.city
    ) {
      alert('data for some field is missing');
    }

    const orders = {
      po_num: this.po_num,
      date: this.date,
      total_amt: this.total_amt,
      username: this.username,
      desc: this.desc,
      state: this.state,
      city: this.city,
    };
    console.log('orders: ', orders);

    this.purchaseOrderSer.createOrder(orders).subscribe({
      next: (result) => {
        console.log('result: ', result);
        this.clearForm();
        this.purchaseOrderSer.getAllOrders().subscribe({
          next: (data: any) => {
            console.log('data: ', data);
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
    this.po_num = '';
    this.date = '';
    this.total_amt = '';
    this.username = '';
    this.desc = '';
    this.state = '';
    this.city = '';
  }
}
