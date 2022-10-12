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
}