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

  po_num: string = '';
  date: string = '';
  total_amt: string = '';
  username: string = '';
  desc: string = '';
  state: string = '';
  city: string = '';
  ponum: any = [];
  constructor(private purchaseOrderSer: PurchaseOrderService) {
    this.onCancelUpdateEvent = new EventEmitter();
  }

  ngOnInit(): void {
    // this.ponum = this.purchaseOrderSer.poNumber();
    // console.log(this.ponum);
  }
  updateOrder() {
    console.log('order: ', this.order);
    this.purchaseOrderSer.updateOrder(this.order).subscribe({
      next: (result) => {
        console.log('Result: ', result);

        this.purchaseOrderSer.getAllOrders().subscribe({
          next: (data: any) => {
            console.log('data', data);
            this.purchaseOrderSer.orderList = data;
            this.cancelUpdateForm();
          },
          error: () => {},
          complete: () => {},
        });
      },
      error: () => {},
      complete: () => {},
    });
  }
  cancelUpdateForm() {
    this.onCancelUpdateEvent.emit();
  }
}
