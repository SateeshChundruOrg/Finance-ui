import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from './customer.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
 BASE_URL="http://localhost:8080";
 CUSTOMERS="/customers";
  constructor(private httpClient: HttpClient) { }

  createCustomer(customer:CustomerModel){
    return this.httpClient.post<CustomerModel>(this.BASE_URL+this.CUSTOMERS,customer ) 
  }

  getAllCustomers():Observable<CustomerModel[]>{
    return this.httpClient.get<CustomerModel[]>(this.BASE_URL+this.CUSTOMERS); 
  }
}
