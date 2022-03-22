import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {BookserviceModule} from '../../modules/bookservice/bookservice.module';
import { AMSEmployeeService } from 'src/app/services/amsemployee.service';
import { AMSCustomerService } from 'src/app/services/amscustomer.service';
import { PlacingOrderModule } from 'src/app/modules/placing-order/placing-order.module';
@Component({
  selector: 'app-emp-get-all-orders',
  templateUrl: './emp-get-all-orders.component.html',
  styleUrls: ['./emp-get-all-orders.component.css']
})
export class EmpGetAllOrdersComponent implements OnInit {
  GetOrders!:FormGroup;
  svc:AMSEmployeeService;
  //router:Router;
  //emp=new PlacingOrderModule();
  orderlist!:PlacingOrderModule[];
  constructor(svc:AMSEmployeeService, private fb:FormBuilder) { 
    this.svc=svc;
  }

  ngOnInit(): void {
    this.GetOrders = new FormGroup({
     
   });
    this.svc.GetAllOrders().subscribe(data=>
      {
        //this.custlist=data;
        console.log(data)
        this.orderlist=data.filter(item => item.billamount > 2000000);
        console.log(this.orderlist);  
      })
  }
}
