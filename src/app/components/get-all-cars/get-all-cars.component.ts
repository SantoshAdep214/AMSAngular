import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AMSEmployeeService } from 'src/app/services/amsemployee.service';
import { AdminService } from 'src/app/services/admin.service';
import {CarDetailsModule} from 'src/app/modules/car-details/car-details.module'
@Component({
  selector: 'app-get-all-cars',
  templateUrl: './get-all-cars.component.html',
  styleUrls: ['./get-all-cars.component.css']
})
export class GetAllCarsComponent implements OnInit {
  GetCars!:FormGroup;
  svc:AdminService;
  //router:Router;
  carlist!:CarDetailsModule[];
  constructor(svc:AdminService, private fb:FormBuilder) { 
    this.svc=svc;
  }

  ngOnInit(): void {
    this.GetCars = new FormGroup({
  });
  console.log(this.carlist);
  this.svc.GetAllCars().subscribe(data=>
    {
      
      //this.custlist=data;
      this.carlist=data;
      console.log(this.carlist);
    })
}

}
