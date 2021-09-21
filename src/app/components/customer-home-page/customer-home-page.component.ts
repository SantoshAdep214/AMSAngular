import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.css']
})
export class CustomerHomePageComponent implements OnInit {

  constructor(private router:Router) { 
    this.router=router;
  }

  ngOnInit(): void {
  }


  Buynow()
  {
    this.router.navigateByUrl('/CustomerLogin');
  }
  Login()
  {
    this.router.navigateByUrl('/CustomerLogin');
  }

}
