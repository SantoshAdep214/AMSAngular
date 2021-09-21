import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomerRegisterModule {

  customerid:number=0;
  customername:string="";
  customeraddress:string="";
  customergender:string="";
  customermobno:number=0;  
  customeremail:string="";   
  customerpass:string="";
 
 }
