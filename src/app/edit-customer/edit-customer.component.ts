import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerModel, Payment } from '../customer.model'
import { CustomerDetailsService } from '../customer-details.service'
import { ActivatedRoute, Router } from '@angular/router';
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],


})
export class EditCustomerComponent implements OnInit {


  isEditMode = false;
  editIndex = -1;

  customerDetails: CustomerModel = {
customerId:'',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    aadhar: '',
    emailAddress: '',
  };

  constructor(private customerDetailsService: CustomerDetailsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (param.get('customerIndex')) {
        this.isEditMode = true;
        this.editIndex = +param.get('customerIndex');
        this.customerDetails = this.customerDetailsService.getCustomer(this.editIndex);
      }
    })
  };
  onSubmitCustomerDetails() {
    if (this.isEditMode) {
      this.customerDetailsService.editCustomer(this.editIndex, this.customerDetails);
      this.isEditMode = false;
      this.editIndex = -1;
      this.navigateToAllCustomersPage();
    } else {
      this.customerDetails.customerId=uuidv4();
      this.customerDetailsService.addCustomer(this.customerDetails);
      this.navigateToAllCustomersPage();
    }
  }
  navigateToAllCustomersPage() {
    this.router.navigate(['']);
  }

}

