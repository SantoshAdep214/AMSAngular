import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AMSEmployeeService } from 'src/app/services/amsemployee.service';
import { AdminService } from 'src/app/services/admin.service';
import {CarDetailsModule} from 'src/app/modules/car-details/car-details.module'
@Component({
  selector: 'app-emp-get-all-cars',
  templateUrl: './emp-get-all-cars.component.html',
  styleUrls: ['./emp-get-all-cars.component.css']
})
export class EmpGetAllCarsComponent implements OnInit {
  GetCars!:FormGroup;
  svc:AdminService;
  //router:Router;
  carlist!:CarDetailsModule[];
  constructor(svc:AdminService, private fb:FormBuilder) { 
    this.svc=svc;
  }

  
  ngOnInit(): void {
    console.log(this.carlist);
    this.svc.GetAllCars().subscribe(data=>
      {
        
        //this.custlist=data;
        this.carlist=data;
        console.log(this.carlist);
      })
  }
}

