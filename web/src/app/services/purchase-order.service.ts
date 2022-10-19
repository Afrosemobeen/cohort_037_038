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

  poNumber() {
    return [
      { po_num: 'PO1234' },
      { po_num: 'PO4562' },
      { po_num: 'PO7859' },
      { po_num: 'PO7856' },
    ];
  }

  states() {
    return [
      { state: 'Karnataka' },
      { state: 'Maharashtra' },
      { state: 'Jammu and Kashmir' },
      { state: 'Rajasthan' },
    ];
  }

  cities() {
    return [
      { city: 'Belagavi' },
      { city: 'Dharwad' },
      { city: 'Kolhapur' },
      { city: 'Pune' },
      { city: 'Cargill' },
      { city: 'Doda' },
      { city: 'Jaipur' },
      { city: 'Udaipur' },
    ];
  }
}
