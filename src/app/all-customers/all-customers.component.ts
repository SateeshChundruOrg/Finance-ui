import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../customers-service';
import { CustomerModel, Payment } from '../customer.model';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
})
export class AllCustomersComponent implements OnInit {


  @Input() customers: CustomerModel[] = [

  ];
  constructor(private customerService:CustomersService,
             private router: Router) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(customers =>{
      this.customers = customers;
    });
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
 // this.customerDetailsService.deleteCustomer(index);
    // this.deleteCustomer.emit(index);

  }
  onAddPayment(index) {
    // this.addPayment.emit(index);
  }
  onViewPayment(index) {
    // this.viewPayment.emit(index);
  }
}


