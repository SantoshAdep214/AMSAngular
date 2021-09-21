import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlacingOrderModule {

  orderid:number=0;
  orderdate:string="";
  customerid:number=0;
  productname:string="";
  billamount:number=0;
  email:string=""; 
  carprice:number=0;
  carno:number=0;
  carquantity:number=0;
  carmodel:string="";
 
}
