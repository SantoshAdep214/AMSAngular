import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {CarDetailsModule} from '../../modules/car-details/car-details.module';
import {AdminService}  from '../../services/admin.service';


@Component({
  selector: 'app-insert-cars',
  templateUrl: './insert-cars.component.html',
  styleUrls: ['./insert-cars.component.css']
})
export class InsertCarsComponent implements OnInit {
  InsertCar!:FormGroup;
  svc:AdminService;
  //router:Router;
  car=new CarDetailsModule();
  constructor(svc:AdminService ,private fb : FormBuilder) { 
    this.svc=svc;
  }

  ngOnInit(): void {
    this.InsertCar=this.fb.group({
      carmodel: new FormControl('', Validators.required),

      carmileage : new FormControl('', Validators.required),

          carcolor: new FormControl('', Validators.required),
  
            topspeed: new FormControl('', Validators.required),

              carprice: new FormControl('', Validators.required),
              carquantity:new FormControl('',Validators.required)
    });
  }


    CarAdd() {
   
    this.car.carmodel=this.InsertCar.value.carmodel;
    this.car.carmileage=this.InsertCar.value.carmileage;
    
    this.car.carcolor=this.InsertCar.value.carcolor;
    this.car.cartopspeed= parseInt (this.InsertCar.value.topspeed);
    this.car.carprice=parseInt (this.InsertCar.value.carprice);
    this.car.carquantity=parseInt(this.InsertCar.value.carquantity);
     
    this.svc.InsertCarAdmin(this.car).subscribe((data)=>
    {
      console.log("data ="+data);
      if(data==true)
      {
        alert("Car Added  Successfully.....");
      }
      else 
      {
        alert("something went wrong ....")
      }
    })
}
}
