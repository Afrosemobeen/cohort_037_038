import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PurchaseOrderService } from 'app/services/purchase-order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
  @Input() order: any;
  @Output() onCancelUpdateEvent: EventEmitter<any>;
  ponum: any = [];
  states: any = [];
  cities: any = [];
  poNumbers: any = [];
  orderForm = this.purchaseOrderSer.getOrderFormData();

  constructor(public purchaseOrderSer: PurchaseOrderService) {
    this.onCancelUpdateEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.orderForm.setValue({ ...this.order });
    this.states = this.purchaseOrderSer.getStates().subscribe((data: any) => {
      console.log(data);
      this.purchaseOrderSer.states = data;
      this.states = data;
    });
    this.cities = this.purchaseOrderSer.getCities().subscribe((data: any) => {
      console.log(data);
      this.purchaseOrderSer.cities = data;
      this.cities = data;
    });
    this.poNumbers = this.purchaseOrderSer.getPoNumber().subscribe((data) => {
      console.log(data);
      this.purchaseOrderSer.poNumbers = data;
      this.poNumbers = data;
    });
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
