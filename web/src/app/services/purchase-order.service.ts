import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

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
//  getCity(){
//   return this.http.get('http://localhost:5000/lookups/city');
  
//  }
  getOrderFormData() {
    return this.fbSer.group({
      _id: [''],
      po_num: ['', [Validators.required, RxwebValidators.unique()]],
      // desc: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(10),
      //     Validators.maxLength(50),
      //   ],
      // ],
      desc: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
      date: ['', [Validators.required]],
      state: ['', [Validators.required]],
      total_amt: ['', [Validators.required]],
      city: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  poNumber() {
    return [
      { po_num: 'PO1234' },
      { po_num: 'PO4562' },
      { po_num: 'PO7859' },
      { po_num: 'PO7856' },
      { po_num: 'PO8524' },
      { po_num: 'PO4569' },
      { po_num: 'PO7531' },
      { po_num: 'PO9518' },
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
