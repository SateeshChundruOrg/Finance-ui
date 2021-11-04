import { Injectable } from '@angular/core';
import { CustomerModel, PageType } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  customers: CustomerModel[] = [

  ];
  customerIndex: number = -1;
  customerDetails: CustomerModel;

  constructor() { }

  getAllCustomers(): CustomerModel[] {
    return this.customers;
  }

  addCustomer(customer: CustomerModel): void {
    this.customers.push(customer);
  }
  editCustomer(customerIndex: number, customer: CustomerModel) {
    this.customers[customerIndex] = customer;
  }

  deleteCustomer(customerIndex: number) {
    this.customers.splice(customerIndex, 1);
  }

  getCustomer(customerIndex: number): CustomerModel {
    return this.customers[customerIndex];
  }

}
