import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddPaymentComponent } from './payment/add-payment.component';


const routes: Routes = [
{path:'',component:AllCustomersComponent},
  { path: 'add-customer', component: EditCustomerComponent },
 { path: 'edit-customer/:customerIndex', component: EditCustomerComponent },
{path:'view-customer/:customerIndex',component:CustomerDetailsComponent},
{path:'add-payment',component:AddPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
