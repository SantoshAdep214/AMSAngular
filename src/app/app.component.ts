import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMSAngular';
}

/*  Each component is declared with three properties:
1. Selector - used for accessing the component
2. Template/TemplateURL - contains HTML of the component
3. StylesURL - contains component-specific stylesheets   

-After this, Angular calls the index.html file. This file 
consequently calls the root component that is app-root. The root 
component is defined in app.component.ts.

The HTML template of the root component is displayed inside the <app-root> tags.

This is how every angular application works.
*/ 