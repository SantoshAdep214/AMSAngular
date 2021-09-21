import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CarDetailsModule { 
  carno:number=0;
  carmodel:string="";
  carmileage:string="";
  carcolor:string="";
  cartopspeed:number=0;
  carprice:number=0;
  carquantity:number=0;
}
