import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  orderList: any = [];
  constructor(private http: HttpClient) {}
  getAllOrders() {
    return this.http.get('http://localhost:5000/orders');
  }
  createOrder(orders: any) {
    console.log('Order: ', orders);
    // delete order._id;
    return this.http.post('http://localhost:5000/orders', orders);
  }

  updateOrder(orders: any) {
    return this.http.put('http://localhost:5000/orders/' + orders._id, orders);
  }
  // poNumber() {
  //   return [
  //     { po_num: 'PO1234' },
  //     { po_num: 'PO4562' },
  //     { po_num: 'PO7859' },
  //     { po_num: 'PO7856' },
  //   ];
  // }
}
