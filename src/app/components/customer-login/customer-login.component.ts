import { Component, OnInit } from '@angular/core';
import { AMSCustomerService } from 'src/app/services/amscustomer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {CustomerRegisterModule}  from '../../modules/customer-register/customer-register.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  LoginForm!:FormGroup; 
  svc:AMSCustomerService; 
  loginlist!:CustomerRegisterModule[];  
  
  login=new CustomerRegisterModule();
  constructor(svc:AMSCustomerService , private  fb : FormBuilder,private router:Router) { 
    this.svc=svc; 
    this.router=router;
  }

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
     

              email: new FormControl('', [Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),

                password: new FormControl('', [Validators.required,
                  Validators.minLength(4)])        

    });    
    
  }  

  Login(){

    this.login.customeremail=this.LoginForm.value.email;
    this.login.customerpass=this.LoginForm.value.password;
    console.log("custonmer email="+this.login.customeremail);
    console.log("custonmer pass="+this.login.customerpass);
    console.log("ab service ko call karungaa.....");
    
    this.svc.Login(this.login).subscribe((data)=>
    {    
      console.log("data ="+data);
     
      console.log("custonmer email="+this.login.customeremail);
      console.log("custonmer pass="+this.login.customerpass);
      if(data==true)
      {
        alert(" LogIn Successfully");
        this.router.navigateByUrl('/PlacingOrder');
      }   
      else
      {
        alert("Email or Password is not valid")
      }   
    });
  }
Buynow()
  {
    this.router.navigateByUrl('/CustomerLogin');  
  }    
}



