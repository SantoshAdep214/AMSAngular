import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders}  from '@angular/common/http';
import {CustomerRegisterModule}  from '../modules/customer-register/customer-register.module';
import {Observable,Observer} from 'rxjs';
import { CustomerNewRegisterComponent } from '../components/customer-new-register/customer-new-register.component';
import { stringify } from '@angular/compiler/src/util';
import { PlacingOrderModule } from '../modules/placing-order/placing-order.module';
import { BookserviceModule } from '../modules/bookservice/bookservice.module';
import{CarDetailsModule} from '../modules/car-details/car-details.module';
import { EmailValidator } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class AMSCustomerService {
  http!:HttpClient;
  url:string="http://localhost:2939/api";
 httpOptions={Headers:new HttpHeaders({'Content-Type':'application/json'})};
  constructor(http:HttpClient) {
    this.http=http;
   }
    
   
   InsertCustomer(cust:CustomerRegisterModule):Observable<boolean>
   {
     //console.log("hello.....we are stuck "+cust);
    // alert(JSON.stringify(cust));
     return this.http.post<boolean>(this.url+"/AMSCustomer/InsertCustomer",cust) ; ///api/CustomerAPI/AddCustomer --insertcustomer
       
    }

    Login(cust:CustomerRegisterModule):Observable<boolean>
    {
      //console.log("hello.....we made it "+cust);
     // console.log(JSON.stringify(cust));

      return this.http.post<boolean>(this.url+"/AMSCustomer/Login",cust); ///api/CustomerAPI/AddCustomer --insertcustomer
        
    }

    PlacingOrder(plc:PlacingOrderModule,email:string,carmodel:string):Observable<boolean>
    {
      //console.log("hello.....we made it "+plc);
     // console.log(JSON.stringify(plc));

      return this.http.post<boolean>(this.url+"/AMSCustomer/PlacingOrder/"+email+"/"+carmodel,plc); ///api/CustomerAPI/AddCustomer --insertcustomer
    }

    SelectAllCars():Observable<PlacingOrderModule[]>
    {
      return this.http.get<PlacingOrderModule[]>(this.url+"/AMSCustomer/selectCarByCarno");
    } 


    selectCarPriceByCarmodel(carmodel:string):Observable<PlacingOrderModule[]>
    {
      return this.http.get<PlacingOrderModule[]>(this.url+"/AMSCustomer/selectCarPriceByCarmodel/"+carmodel);
    } 
//string email, string carmodel, string aptdate, string addesc
    BookService(svc:BookserviceModule,email:string,c:string):Observable<boolean>
    {
      //console.log("hello.....we made it "+svc);
     // console.log(JSON.stringify(svc));
      return this.http.post<boolean>(this.url+"/AMSCustomer/Service/"+email+"/"+c,svc); //maharani slash inventor
    } 


    UpdateCustomer(custid:number,cust:CustomerRegisterModule):Observable<boolean>
   {
     //console.log("hello.....we are stuck "+cust);
     //alert(JSON.stringify(cust));
     //alert("custid="+custid);
     return this.http.put<boolean>(this.url+"/AMSCustomer/UpdateCustomer/"+custid,cust) ; ///api/CustomerAPI/AddCustomer --insertcustomer
     
  }

   // /AMSCustomer/selectCarPriceByCarNo  

}
