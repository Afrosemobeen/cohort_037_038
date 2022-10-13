import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
  @Input() order: any;
  @Output() onCancelUpdateEvent: EventEmitter<any>;

  po_number: string = '';
  date: string = '';
  total_amount: string = '';
  username: string = '';
  desc: string = '';
  state: string = '';
  city: string = '';
  ponum: any = [];
  constructor(private purchaseOrderSer: PurchaseOrderService) {
    this.onCancelUpdateEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.ponum = this.purchaseOrderSer.poNumber();
    console.log(this.ponum);
  }

  cancelUpdateForm() {
    this.onCancelUpdateEvent.emit();
  }
}
