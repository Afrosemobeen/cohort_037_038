import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  constructor() {}

  poNumber() {
    return [
      { po_num: 'PO1234' },
      { po_num: 'PO4562' },
      { po_num: 'PO7859' },
      { po_num: 'PO7856' },
    ];
  }

  purchaseList() {
    return [
      {
        po_number: 'po123',
        date: '2011-05-23',
        total_amount: '12000',
        username: 'Snehal',
        desc: 'I am snehal',
        state: 'Karnataka',
        city: 'Belgaum',
      },
      {
        po_number: 'po456',
        date: '2011-11-10',
        total_amount: '12500',
        username: 'Pranay',
        desc: 'I am Pranay',
        state: 'Maharashtra',
        city: 'Mumbai',
      },
      {
        po_number: 'po789',
        date: '2022-09-22',
        total_amount: '23000',
        username: 'Ganesh',
        desc: 'I am Ganesh',
        state: 'Karnataka',
        city: 'Dharwad',
      },
      {
        po_number: 'po563',
        date: '2016-10-15',
        total_amount: '52000',
        username: 'Sarthak',
        desc: 'I am Sarthak',
        state: 'Karnataka',
        city: 'Belgaum',
      },
    ];
  }
}
