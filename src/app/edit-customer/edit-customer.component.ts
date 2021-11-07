import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerModel, Payment } from '../customer.model'
import { CustomersService} from '../customers-service'
import { ActivatedRoute, Router } from '@angular/router';
import {v4 as uuidv4} from 'uuid'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],


})
export class EditCustomerComponent implements OnInit {
  isEditMode = false;
  editIndex = -1;
  customerForm:FormGroup;
  customerDetails:CustomerModel;

  constructor(private customersService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
   
  ngOnInit() {
    
    const defaultPhoneControl = new FormGroup({
     'phoneNumber':new FormControl(null,Validators.required),
     'phoneType':new FormControl('phone',Validators.required)
    });

    defaultPhoneControl.controls['phoneType'].setValue('mobile');
   
  
    const formArray = new FormArray([defaultPhoneControl])
    this.customerForm = new FormGroup({
      'name':new FormControl(null,Validators.required),
      'address':new FormControl(null, Validators.required),
      'phoneNumbers': formArray
    });
    this.activatedRoute.paramMap.subscribe(param => {
      if (param.get('customerIndex')) {
        this.isEditMode = true;
        this.editIndex = +param.get('customerIndex');
        // this.customerDetails = this.customerDetailsService.getCustomer(this.editIndex);
      }
    })
     
    
  };
  onSubmitCustomerDetails() {
    console.log(this.customerForm.value.phoneNumbers)
    const customerDetails = this.populateAndGetCustomerModel(this.customerForm.value);
    this.customersService.createCustomer(customerDetails).subscribe(()=>{
      this.navigateToAllCustomersPage();
    });
    
       // if (this.isEditMode) {
    //   this.customerDetailsService.editCustomer(this.editIndex, this.customerDetails);
    //   this.isEditMode = false;
    //   this.editIndex = -1;
    //   this.navigateToAllCustomersPage();
    // } else {
    //   this.customerDetails.customerId=uuidv4();
    //   this.customerDetailsService.addCustomer(this.customerDetails);
    //   this.navigateToAllCustomersPage();
    // }
  }

  populateAndGetCustomerModel(formData: any): CustomerModel {
    const customerDetails = new CustomerModel();
    customerDetails.name = formData.name;
    customerDetails.address = formData.address;
    const phoneNumbers = formData.phoneNumbers;
    customerDetails.phoneNumbers = phoneNumbers
    return customerDetails;
  }
  navigateToAllCustomersPage() {
    this.router.navigate(['']);
  }

  addPhoneNumberFields(){
    const defaultPhoneControl = new FormGroup({
      'phoneNumber':new FormControl(null,Validators.required),
      'phoneType':new FormControl('phone',Validators.required)
     });
     defaultPhoneControl.controls['phoneType'].setValue('mobile');
   
    (this.customerForm.get('phoneNumbers') as FormArray).push(defaultPhoneControl);
  }

  deletePhoneFields(index:number){
(this.customerForm.get('phoneNumbers') as FormArray).removeAt(index);
  }

  get controls() {
  
    return (this.customerForm.get('phoneNumbers') as FormArray).controls;
  }

}

