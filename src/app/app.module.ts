import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
/* App Root */
import { AppComponent } from './app.component';
// feature module
import { CustomerNewRegisterComponent } from './components/customer-new-register/customer-new-register.component';
import { EmployeeNewRegisterComponent } from './components/employee-new-register/employee-new-register.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PlacingOrderComponent } from './components/placing-order/placing-order.component';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { InsertCarsComponent } from './components/insert-cars/insert-cars.component';
import { GetAllEmployeesComponent } from './components/get-all-employees/get-all-employees.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { EmpGetAllServicesComponent } from './components/emp-get-all-services/emp-get-all-services.component';
import { GetAllOrdersComponent } from './components/get-all-orders/get-all-orders.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { CustomerHomePageComponent } from './components/customer-home-page/customer-home-page.component';
import { GetAllCarsComponent } from './components/get-all-cars/get-all-cars.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminGetAllServicesComponent } from './components/admin-get-all-services/admin-get-all-services.component';
import { EmpGetAllCarsComponent } from './components/emp-get-all-cars/emp-get-all-cars.component';
import { EmpGetAllCustomerComponent } from './components/emp-get-all-customer/emp-get-all-customer.component';
import { EmpGetAllOrdersComponent } from './components/emp-get-all-orders/emp-get-all-orders.component';
import { EmployeeHomePageComponent } from './components/employee-home-page/employee-home-page.component';

@NgModule({
  declarations: [
       AppComponent,
       CustomerNewRegisterComponent,
       EmployeeNewRegisterComponent,
       CustomerLoginComponent,
       EmployeeLoginComponent,
       AdminLoginComponent,
       PlacingOrderComponent,
       BookServiceComponent,
       InsertCarsComponent,
       GetAllEmployeesComponent,
       UpdateCustomerComponent,
       EmpGetAllServicesComponent,
       GetAllOrdersComponent,
       GetAllCustomersComponent,
       CustomerHomePageComponent,
       GetAllCarsComponent,
       AdminPageComponent,
       AdminGetAllServicesComponent,
       EmpGetAllCarsComponent,
       EmpGetAllCustomerComponent,
       EmpGetAllOrdersComponent,
       EmployeeHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //app component is getting bootstrapped
                            //This component is defined in app.component.ts file.
                            // This file interacts with the webpage and serves data to it.
})
export class AppModule {}
