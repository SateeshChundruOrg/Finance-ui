import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AddPaymentComponent } from './payment/add-payment.component';
import { ViewPaymentComponent } from './payment/view-payment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    AllCustomersComponent,
    AddPaymentComponent,
    ViewPaymentComponent,
    HeaderComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
