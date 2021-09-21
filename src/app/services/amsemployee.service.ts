import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders}  from '@angular/common/http';
import {Observable,Observer} from 'rxjs';
import { EmployeeRegisterModule } from '../modules/employee-register/employee-register.module';
import { BookserviceModule } from '../modules/bookservice/bookservice.module';
import{PlacingOrderModule} from '../modules/placing-order/placing-order.module';
import{CarDetailsModule} from '../modules/car-details/car-details.module';
import { CustomerRegisterModule } from '../modules/customer-register/customer-register.module';


@Injectable({
  providedIn: 'root'
})
export class AMSEmployeeService {
  http!:HttpClient;
  url:string="http://localhost:2939/api";
 httpOptions={Headers:new HttpHeaders({'Content-Type':'application/json'})};
  constructor(http:HttpClient) {
    this.http=http;
   }
    
   
   InsertEmployee(emp:EmployeeRegisterModule):Observable<boolean>
   {
     //console.log("hello.....we are stuck "+emp);
     //alert(JSON.stringify(emp));
     return this.http.post<boolean>(this.url+"/AMSEmployee/InsertEmployee",emp); ///api/CustomerAPI/AddCustomer --insertcustomer
       
    }


    
    EmployeeLogin(cust:EmployeeRegisterModule):Observable<boolean>
    {
     // console.log("hello.....we made it "+cust);
     // console.log(JSON.stringify(cust));

      return this.http.post<boolean>(this.url+"/AMSEmployee/login",cust); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }

    
    EmpGetAllServices():Observable<BookserviceModule[]>
    {
      //console.log("hello.....we made it ");

      return this.http.get<BookserviceModule[]>(this.url+"/AMSEmployee/GetAllServices"); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }          

    GetAllOrders():Observable<PlacingOrderModule[]>
    {
    
      return this.http.get<PlacingOrderModule[]>(this.url+"/AMSEmployee/OrderList"); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }    
    GetAllCars():Observable<CarDetailsModule[]>
    {
    
      return this.http.get<CarDetailsModule[]>(this.url+"/AMSEmployee/GetAllCars"); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }
    GetAllEmployees():Observable<EmployeeRegisterModule[]>
    {
    
      return this.http.get<EmployeeRegisterModule[]>(this.url+"/AMSAdmin/GetAllEmployees"); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }

    GetAllCustomers():Observable<CustomerRegisterModule[]>
    {
    
      return this.http.get<CustomerRegisterModule[]>(this.url+"/AMSAdmin/GetAllCustomers"); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }

   
}
