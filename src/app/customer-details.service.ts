import { Injectable } from '@angular/core';
import { CustomerModel, PageType } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  customers: CustomerModel[] = [
    {
      'customerId': '1',
      'firstName': 'krishna',
      'lastName': 'a',
      'emailAddress': 'ka@gmail.com',
      'phoneNumber': '12345645645'
    },
    {
      'customerId': '2',
      'firstName': 'SAT',
      'lastName': 'a',
      'emailAddress': 'ka@gmail.com',
      'phoneNumber': '12345645645'
    },
    {
      'customerId': '3',
      'firstName': 'SAT1',
      'lastName': 'a',
      'emailAddress': 'ka@gmail.com',
      'phoneNumber': '12345645645'
    },
    {
      'customerId': '4',
      'firstName': 'SAT2',
      'lastName': 'a',
      'emailAddress': 'ka@gmail.com',
      'phoneNumber': '12345645645'
    }

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
