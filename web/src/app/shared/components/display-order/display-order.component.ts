import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css'],
})
export class DisplayOrderComponent implements OnInit {
  @Output() onOrderEditEvent: EventEmitter<any>;
  purchaseList: any = [];
  constructor(private purchaseOrderSer: PurchaseOrderService) {
    this.onOrderEditEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.purchaseList = this.purchaseOrderSer.purchaseList();
  }

  editOrder(order: any) {
    this.onOrderEditEvent.emit(order);
  }
}
