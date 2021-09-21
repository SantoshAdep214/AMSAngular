import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {BookserviceModule} from '../../modules/bookservice/bookservice.module';
import { AMSEmployeeService } from 'src/app/services/amsemployee.service';
import { AMSCustomerService } from 'src/app/services/amscustomer.service';

@Component({
  selector: 'app-emp-get-all-services',
  templateUrl: './emp-get-all-services.component.html',
  styleUrls: ['./emp-get-all-services.component.css']
})
export class EmpGetAllServicesComponent implements OnInit {
  EmpGetAll!:FormGroup;
  svc:AMSEmployeeService;
  //router:Router;
  emp=new BookserviceModule();
  servicelist!:BookserviceModule[];
  constructor(svc:AMSEmployeeService, private fb:FormBuilder) { 
    this.svc=svc;
    
  }

  ngOnInit(): void {
    this.svc.EmpGetAllServices().subscribe(data=>
      {
        //this.custlist=data;
        this.servicelist=data;
        console.log(this.servicelist);
      })
  }
 

}
