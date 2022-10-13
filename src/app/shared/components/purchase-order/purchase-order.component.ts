import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
})
export class PurchaseOrderComponent implements OnInit {
  formFlag: string = 'create';
  currEmp: any = {};
  constructor() {}

  ngOnInit(): void {}

  editOrder(order: any) {
    console.log(order);
    this.formFlag = 'update';
    this.currEmp = { ...order };
  }
}
