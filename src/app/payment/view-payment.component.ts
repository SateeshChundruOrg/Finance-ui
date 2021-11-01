import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CustomerModel, Payment } from '../customer.model';

@Component({
    selector: 'app-view-payment',
    templateUrl: 'view-payment.component.html',


})
export class ViewPaymentComponent implements OnInit {
    @Input() customerDetails: CustomerModel;
    payments: Payment[] = [];
    isEditMode: any;
    editPaymentDetails: any;
    @Input() paymentDetails: Payment;


    ngOnInit(): void {

        if (this.customerDetails.payments) {
            this.payments = this.customerDetails.payments;
        }

    }
 onSubmitPaymentDetails() {
    if (this.isEditMode) {
      this.editPaymentDetails.emit(this.paymentDetails);
    } else {
      this.editPaymentDetails.emit(this.paymentDetails);
    }
  }
}