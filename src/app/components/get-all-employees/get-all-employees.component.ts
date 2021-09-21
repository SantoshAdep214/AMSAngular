import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {CustomerRegisterModule} from '../../modules/customer-register/customer-register.module';
import { AMSEmployeeService } from 'src/app/services/amsemployee.service';
import { AMSCustomerService } from 'src/app/services/amscustomer.service';
import {AdminService } from 'src/app/services/admin.service';
import {EmployeeRegisterModule} from 'src/app/modules/employee-register/employee-register.module'

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent implements OnInit {
  GetEmployees!:FormGroup;
  svc:AMSEmployeeService;
  //router:Router;
  
  employeelist!:EmployeeRegisterModule[];
  constructor(svc:AMSEmployeeService, private fb:FormBuilder) {
    this.svc=svc;

   }

  ngOnInit(): void {
    this.GetEmployees = new FormGroup({
      firstName: new FormControl()
   });
    this.svc.GetAllEmployees().subscribe(data=>
      {
        //this.custlist=data;
        this.employeelist=data;
        console.log(this.employeelist);
      })
  }

}