import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.css']
})
export class EmployeeHomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Login()
  {
    this.router.navigateByUrl('/CustomerLogin');
  }
}
