import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  orderList: any = [];
  poNumbers: any = [];
  numSelected: String = '';
  states: any = [];
  cities: any = [];
  flag: boolean = false;
  constructor(private http: HttpClient, private fbSer: FormBuilder) {}
  getAllOrders() {
    return this.http.get('http://localhost:5000/orders');
  }

  createOrder(orders: any) {
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
      desc: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
        ],
      ],
      date: ['', [Validators.required]],
      state: ['', [Validators.required]],
      total_amt: ['', [Validators.required]],
      city: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  getAll() {
    return this.http.get('http://localhost:5000/lookups');
  }

  getPoNumber() {
    return this.http.get('http://localhost:5000/lookups/ponumber');
    this.numSelected;
  }

  getStates() {
    return this.http.get('http://localhost:5000/lookups/state');
  }

  getCities() {
    return this.http.get('http://localhost:5000/lookups/city');
  }
}
