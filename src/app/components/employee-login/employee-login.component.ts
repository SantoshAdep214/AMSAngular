import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AMSEmployeeService } from 'src/app/services/amsemployee.service';
import { EmployeeRegisterModule } from '../../modules/employee-register/employee-register.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  LoginForm!:FormGroup; 
  svc:AMSEmployeeService; 
  loginlist!:EmployeeRegisterModule[];  
  //router:Router;
  login=new EmployeeRegisterModule();
  constructor(svc:AMSEmployeeService , private  fb : FormBuilder,private router:Router) { 
    this.svc=svc;  
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

    this.login.employeeemail=this.LoginForm.value.email;
    this.login.employeepass=this.LoginForm.value.password;
    console.log("custonmer email="+this.login.employeeemail);
    console.log("custonmer pass="+this.login.employeepass);
    
    
    this.svc.EmployeeLogin(this.login).subscribe((data)=>
    {    
      console.log("data ="+data);
     
      if(data==true)
      {
        alert("Employee LogIn Succesfully ");
        this.router.navigateByUrl('/EmployeePage');
      }   
      else
      {
        alert("Employee email or Password is Invalid")
      }
  });
 } 

}
