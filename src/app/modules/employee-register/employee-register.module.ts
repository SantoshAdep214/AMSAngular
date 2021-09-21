import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeRegisterModule { 
  
  employeeid:number=0;
  employeename:string="";
  employeeaddress:string="";
  employeemobno:number=0;
  employeeemail:string="";
  employeepass:number=0;
}
