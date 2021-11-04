import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetailsService } from '../customer-details.service';
import { CustomerModel, Payment } from '../customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customerDetails: CustomerModel;
  customerIndex: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerDetailsService: CustomerDetailsService,
    private router: Router,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.customerIndex = +param.get('customerIndex');
      this.customerDetails = this.customerDetailsService.getCustomer(this.customerIndex);
    })
  }


  displayAllCustomers() {
    this.router.navigate(['']);
  }
  /*  editAllPaymentDetails(){
    this.editPayments.emit();
 
} */
}

