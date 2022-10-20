import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from 'app/services/purchase-order.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
})
export class PurchaseOrderComponent implements OnInit {
  formFlag: string = 'create';
  currEmp: any = {};
  constructor(private purchaseOrderSer: PurchaseOrderService) {}

  ngOnInit(): void {
    this.purchaseOrderSer.getAllOrders().subscribe({
      next: (data: any) => {
        console.log('data: ', data);
        this.purchaseOrderSer.orderList = data;
      },
      error: () => {},
      complete: () => {},
    });
  }

  editOrder(order: any) {
    console.log(order);
    this.formFlag = 'update';
    this.currEmp = { ...order };
  }

  cancelUpdateForm(data: any) {
    this.formFlag = 'create';
  }
}
