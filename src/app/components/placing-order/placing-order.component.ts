import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AMSCustomerService } from 'src/app/services/amscustomer.service';
import { PlacingOrderModule} from '../../modules/placing-order/placing-order.module';
@Component({
  selector: 'app-placing-order',
  templateUrl: './placing-order.component.html',
  styleUrls: ['./placing-order.component.css']
})
export class PlacingOrderComponent implements OnInit {

  carlist!:PlacingOrderModule[];
  carprice:any;
  plcRegForm!:FormGroup;
  svc:AMSCustomerService;
  plc=new PlacingOrderModule();
  constructor(private formbuilder:FormBuilder,svc:AMSCustomerService,private router:Router) { 
    this.router=router;
    this.svc=svc;

  }

  ngOnInit(): void {
    this.plcRegForm=this.formbuilder.group({
      email: new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      Model:new FormControl(''),
      Billamount:new FormControl('')
      
    });
    this.svc.SelectAllCars().subscribe(data=>{
      this.carlist=data;
      console.log(this.carlist);
    })

    
  }


 PlacingOrder()
{
  
  this.plc.billamount= parseInt( this.plcRegForm.value.Billamount);

 
 
  
  console.log("this.plc.billamount="+this.plc.billamount);
 
 

  this.svc.PlacingOrder(this.plc,this.plcRegForm.value.email,this.plcRegForm.value.Model).subscribe((data)=>
  {
    console.log("data ="+data);  
    if(data==true)
    {
      alert("Pre Booked Successfully");
      this.router.navigateByUrl('/CustomerHomePage');
    }
    else
    {
      alert("Email is not valid")
    }
  });        
}

BillGeneration()
{
  this.svc.selectCarPriceByCarmodel(this.plcRegForm.value.Model).subscribe(data=>{
      
   this.carprice=data;

  })

}

}
