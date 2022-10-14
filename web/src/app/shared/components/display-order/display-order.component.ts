import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { PurchaseOrderComponent } from '../purchase-order/purchase-order.component';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css'],
})
export class DisplayOrderComponent implements OnInit {
  @Output() onOrderEditEvent: EventEmitter<any>;

  orderList: any = [];
  constructor(public purchaseOrderSer: PurchaseOrderService) {
    this.onOrderEditEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.purchaseOrderSer.getAllOrders().subscribe({
      next: (data: any) => {
        console.log('data: ', data);
        this.purchaseOrderSer.orderList = data;
        this.orderList = data;
      },
      error: () => {},
      complete: () => {},
    });
  }

  editOrder(order: any) {
    this.onOrderEditEvent.emit(order);
  }
}
