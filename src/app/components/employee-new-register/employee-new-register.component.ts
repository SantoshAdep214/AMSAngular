import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {EmployeeRegisterModule} from '../../modules/employee-register/employee-register.module';
import{AMSEmployeeService} from '../../services/amsemployee.service';


@Component({
  selector: 'app-employee-new-register',
  templateUrl: './employee-new-register.component.html',
  styleUrls: ['./employee-new-register.component.css']
})
export class EmployeeNewRegisterComponent implements OnInit {

  EmpRegForm!:FormGroup;
  svc:AMSEmployeeService;
  //router:Router;
  emp=new EmployeeRegisterModule();
  constructor(svc:AMSEmployeeService ,private fb : FormBuilder,private router:Router) {
    this.svc=svc;
    this.router=router;
   }

  ngOnInit(): void {
    this.EmpRegForm=this.fb.group({
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]{5,20}$')]),

        address: new FormControl('', [Validators.required]),

          gender: new FormControl('', [Validators.required]),
  
            mob: new FormControl('', [Validators.required,
              Validators.pattern('^[0-9]{10}$')]),

              email: new FormControl('', [Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),

                password: new FormControl('', [Validators.required,
                  Validators.minLength(4)])      
  });

  }


  EmpRegister() {
   
    this.emp.employeename=this.EmpRegForm.value.name;
    this.emp.employeeaddress=this.EmpRegForm.value.address;
    
    this.emp.employeemobno=parseInt(this.EmpRegForm.value.mob);
    this.emp.employeeemail=this.EmpRegForm.value.email;
    this.emp.employeepass=this.EmpRegForm.value.password;
    
    this.svc.InsertEmployee(this.emp).subscribe((data)=>
    {
     // console.log("data ="+data);
     
      if(data==true)
      {
        alert("New Employee Registered");

      }
      else
      {
        alert("Something Went wrong,Please Try Again");
      }
     
    }) }
   
}




//this.router.navigateByUrl('/EmployeeLogin');