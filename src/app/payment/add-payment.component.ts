import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CustomerDetailsService } from '../customer-details.service';
import { CustomerModel, Payment } from '../customer.model';

@Component({
    selector: 'app-add-payment',
    templateUrl: './add-payment.component.html',

})
export class AddPaymentComponent implements OnInit {
    customers: CustomerModel[] = [];

    constructor(private customerDetailsService: CustomerDetailsService) { }

    ngOnInit(): void {
        this.customers = this.customerDetailsService.getAllCustomers();

    }
    displayAllCustomers() {
        // this.backToAllCustomersPage.emit(null);

    }
    paymentDetails: Payment = {
    customerId:'',
        money: '',
        interest: '',
        givenDate: '',

    }

    onSubmitPaymentDetails() {
        // this.addPaymentDetails.emit(this.paymentDetails);
    }
}