import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"; 
import {AdminLoginModule} from '../../modules/admin-login/admin-login.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  LoginForm!:FormGroup; 
  svc:AdminService; 
  loginlist!:AdminLoginModule[];  
 
  login=new AdminLoginModule();
  constructor(svc:AdminService , private  fb : FormBuilder,private router:Router) { 
    this.svc=svc; 
    this.router=router;
  }

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
     

      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]{5,20}$')]),

                password: new FormControl('', [Validators.required,
                  Validators.minLength(4)])        

    });    
    
  }  

  Login(){

    this.login.adminname=this.LoginForm.value.name;
    this.login.adminpass=this.LoginForm.value.password;
    console.log("admin name ="+this.login.adminname);
    console.log("admin pass ="+this.login.adminpass);
    
    
    this.svc.AdminLogin(this.login).subscribe((data)=>
    {    
    

      if(data==true)
      {
        alert("Admin LogIn Successfully ");
        this.router.navigateByUrl('/AdminPage');
      }   
      else
      {
        alert("Admin Name or Password Is Invalid ");      
      }    
  });
 } 

 

}
