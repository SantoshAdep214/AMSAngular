import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {CustomerRegisterModule} from '../../modules/customer-register/customer-register.module';
import { AMSEmployeeService } from 'src/app/services/amsemployee.service';
import { AMSCustomerService } from 'src/app/services/amscustomer.service';
import {AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  GetCustomers!:FormGroup;
  svc:AMSEmployeeService;
  //router:Router;
  emp=new CustomerRegisterModule();
  customerlist!:CustomerRegisterModule[];
  constructor(svc:AMSEmployeeService, private fb:FormBuilder) {
    this.svc=svc;
   }

  ngOnInit(): void {
    this.GetCustomers = new FormGroup({
   
   });
    this.svc.GetAllCustomers().subscribe(data=>
      {
        //this.custlist=data;
        this.customerlist=data;
        console.log(this.customerlist);
      })
  }
  }