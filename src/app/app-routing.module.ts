import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { AdminGetAllServicesComponent } from './components/admin-get-all-services/admin-get-all-services.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { BookServiceComponent } from './components/book-service/book-service.component';
import { CustomerHomePageComponent } from './components/customer-home-page/customer-home-page.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerNewRegisterComponent } from './components/customer-new-register/customer-new-register.component';
import { EmpGetAllCarsComponent } from './components/emp-get-all-cars/emp-get-all-cars.component';
import { EmpGetAllCustomerComponent } from './components/emp-get-all-customer/emp-get-all-customer.component';
import { EmpGetAllOrdersComponent } from './components/emp-get-all-orders/emp-get-all-orders.component';
import { EmpGetAllServicesComponent } from './components/emp-get-all-services/emp-get-all-services.component';
import { EmployeeHomePageComponent } from './components/employee-home-page/employee-home-page.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeNewRegisterComponent } from './components/employee-new-register/employee-new-register.component';
import { GetAllCarsComponent } from './components/get-all-cars/get-all-cars.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { GetAllEmployeesComponent } from './components/get-all-employees/get-all-employees.component';
import { GetAllOrdersComponent } from './components/get-all-orders/get-all-orders.component';
import { InsertCarsComponent } from './components/insert-cars/insert-cars.component';
import { PlacingOrderComponent } from './components/placing-order/placing-order.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';


const routes: Routes = [{path:"CustomerRegister",component:CustomerNewRegisterComponent},
{path:'EmployeeRegister', component:EmployeeNewRegisterComponent},
{path:"CustomerLogin",component:CustomerLoginComponent},
{path:"EmployeeLogin",component:EmployeeLoginComponent},
{path:"AdminLogin",component:AdminLoginComponent},     
{path:'',redirectTo:'CustomerHomePage',pathMatch:'full'},        
{path:"PlacingOrder",component:PlacingOrderComponent},  
{path:"BookService",component:BookServiceComponent},   
{path:"CarDetails",component:InsertCarsComponent},   
{path:"UpdateCustomer",component:UpdateCustomerComponent},   
{path:"AdminGetAllServices",component:AdminGetAllServicesComponent} ,
{path:"CustomerHomePage",component:CustomerHomePageComponent},
{path:"GetAllCustomers",component:GetAllCustomersComponent},
{path:"GetAllOrders",component:GetAllOrdersComponent},
// {path:"GetAllCars",component:GetallcarsComponent},
{path:"GetAllEmployees",component:GetAllEmployeesComponent},
{path:"GetAllCars",component:GetAllCarsComponent},
{path:"AdminPage",component:AdminPageComponent}  ,
{path:"AdminGetAllServices",component:AdminGetAllServicesComponent} ,
{path:"EmpGetAllCars",component:EmpGetAllCarsComponent},
{path:"EmployeePage",component:EmployeeHomePageComponent},
{path:"EmpGetAllCustomers",component:EmpGetAllCustomerComponent},
{path:"EmpGetAllOrders",component:EmpGetAllOrdersComponent},
{path:"EmpGetAllServices",component:EmpGetAllServicesComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]    
})
export class AppRoutingModule { 
    
} 
