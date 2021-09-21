import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AMSCustomerService } from 'src/app/services/amscustomer.service';
import {BookserviceModule}  from '../../modules/bookservice/bookservice.module';
import {PlacingOrderModule} from '../../modules/placing-order/placing-order.module';
import{CarDetailsModule} from '../../modules/car-details/car-details.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {
  svcRegForm!:FormGroup; 
  svc:AMSCustomerService; 
  servicelist!:BookserviceModule[];  
  //router:Router;
  carlist!:PlacingOrderModule[];
  booksvc=new BookserviceModule();
  car=new CarDetailsModule();
  constructor( svc:AMSCustomerService,private  fb : FormBuilder ) {
    this.svc=svc;
   }

  ngOnInit(): void {
    this.svcRegForm=this.fb.group({
      email: new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      Model:new FormControl('',[Validators.required]),
      aptdate:new FormControl('',[Validators.required]),
      add:new FormControl('',[Validators.required])
    });
    this.svc.SelectAllCars().subscribe(data=>{
      this.carlist=data;
      console.log(this.carlist);});
  }


  bookService()
  {
    this.booksvc.email=this.svcRegForm.value.email;
    this.booksvc.carmodel=this.svcRegForm.value.Model;
    this.booksvc.aptdate=this.svcRegForm.value.aptdate;
    this.booksvc.adddescription=this.svcRegForm.value.add;
    
    //Carservice cs, string email, string carmodel, string aptdate, string addesc
    this.svc.BookService(this.booksvc,this.booksvc.email,this.booksvc.carmodel).subscribe((data)=>
    {    
      console.log("data ="+data);
      
      
      if(data==true)
      {
        alert("Successfully Service Booked ");
      }   
      else
      {
        alert("Email is not valid");
      }
    
    });
    

  }

}
