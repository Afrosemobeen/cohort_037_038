import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  orderList: any = [];
  constructor(private http: HttpClient, private fbSer: FormBuilder) {}
  getAllOrders() {
    return this.http.get('http://localhost:5000/orders');
  }
  createOrder(orders: any) {
    console.log('Order: ', orders);
    delete orders._id;
    return this.http.post('http://localhost:5000/orders', orders);
  }

  updateOrder(orders: any) {
    return this.http.put('http://localhost:5000/orders/' + orders._id, orders);
  }

  getOrderFormData() {
    return this.fbSer.group({
      _id: [''],
      po_num: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      date: ['', [Validators.required]],
      state: ['', [Validators.required]],
      total_amt: ['', [Validators.required]],
      city: ['', [Validators.required]],
      username: ['', [Validators.required]],
    });
  }
}
