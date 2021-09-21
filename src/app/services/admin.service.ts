import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders}  from '@angular/common/http';
import {Observable,Observer} from 'rxjs';

  import { AdminLoginModule } from '../modules/admin-login/admin-login.module';
import { CarDetailsModule } from '../modules/car-details/car-details.module';
import {EmployeeRegisterModule} from '../modules/employee-register/employee-register.module';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  http!:HttpClient;
  url:string="http://localhost:2939/api";
 httpOptions={Headers:new HttpHeaders({'Content-Type':'application/json'})};
  constructor(http:HttpClient) {
    this.http=http;
   }  


     AdminLogin(ad:AdminLoginModule):Observable<boolean>
    {
     // console.log("hello.....we made it "+ad);
     // console.log(JSON.stringify(ad));

      return this.http.post<boolean>(this.url+"/AMSAdmin/Login",ad); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }

    InsertCarAdmin(car:CarDetailsModule):Observable<boolean>
    {
      //console.log("hello.....we made it "+car);
     // console.log(JSON.stringify(car));

      return this.http.post<boolean>(this.url+"/AMSAdmin/InsertCars",car); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }
    
    GetAllCars():Observable<CarDetailsModule[]>
    {
    
      return this.http.get<CarDetailsModule[]>(this.url+"/AMSAdmin/GetAllCars"); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }
  

}
