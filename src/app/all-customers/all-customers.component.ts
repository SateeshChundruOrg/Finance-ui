import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailsService } from '../customer-details.service';
import { CustomerModel, Payment } from '../customer.model';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
})
export class AllCustomersComponent implements OnInit {


  @Input() customers: CustomerModel[] = [

  ];
  constructor(private customerDetailsService:CustomerDetailsService,
             private router: Router) { }

  ngOnInit(): void {
    this.customers = this.customerDetailsService.getAllCustomers();
  }


  onCustomerAdd() {
   this.router.navigateByUrl('add-customer');
  }

  onViewCustomerDetails(index) {
    this.router.navigate(['view-customer',index]);
  }

  onEditCustomerDetails(index) {
  this.router.navigate(['edit-customer',index]);
  }

  onDeleteCustomerDetails(index) {
  this.customerDetailsService.deleteCustomer(index);
    // this.deleteCustomer.emit(index);

  }
  onAddPayment(index) {
    // this.addPayment.emit(index);
  }
  onViewPayment(index) {
    // this.viewPayment.emit(index);
  }
}


