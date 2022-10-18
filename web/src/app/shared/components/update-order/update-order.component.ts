import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
  @Input() order: any;
  @Output() onCancelUpdateEvent: EventEmitter<any>;
  ponum: any = [];

  orderForm = this.purchaseOrderSer.getOrderFormData();
  constructor(private purchaseOrderSer: PurchaseOrderService) {
    this.onCancelUpdateEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.orderForm.setValue({ ...this.order });
    this.ponum = this.purchaseOrderSer.poNumber();
    console.log(this.ponum);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes: ', changes);
    console.log('Changes: ', changes['order'].currentValue);
    this.orderForm.setValue({ ...changes['order'].currentValue });
  }

  updateOrder() {
    console.log('order: ', this.orderForm.value);
    this.purchaseOrderSer.updateOrder(this.orderForm.value).subscribe({
      next: (result: any) => {
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
