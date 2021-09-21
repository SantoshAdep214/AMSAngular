import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { CustomerRegisterModule } from 'src/app/modules/customer-register/customer-register.module';
import { AMSCustomerService } from '../../services/amscustomer.service';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  CustRegForm!:FormGroup;
  svc:AMSCustomerService;
  //router:Router;
  cust=new CustomerRegisterModule();
  // ord=new OrdersModule();

  constructor(svc:AMSCustomerService ,private fb : FormBuilder)
   { 

           this.svc=svc;
           //this.router=router;
   }

  ngOnInit(): void {

    this.CustRegForm=this.fb.group({
      id: new FormControl('', Validators.required),   
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

  Update() {
    
    this.cust.customername=this.CustRegForm.value.name;
    this.cust.customeraddress=this.CustRegForm.value.address;
    this.cust.customergender=this.CustRegForm.value.gender;
    this.cust.customermobno=parseInt(this.CustRegForm.value.mob);
    this.cust.customeremail=this.CustRegForm.value.email;
    this.cust.customerpass=this.CustRegForm.value.password; 
    
    
    this.svc.UpdateCustomer(this.CustRegForm.value.id,this.cust).subscribe((data)=>
    {
      alert(JSON.stringify(this.CustRegForm.value));
      console.log("data ="+data);
      if(data==true)
      {
        alert("Updated Successfully.....");       
      }
      else
      {
        alert("Not Updated Successfully.....");
      }
    })
  }
}
