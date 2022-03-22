import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); 


  // Inside the build section, the main property of the options object defines the entry point of
  //  the application which in this case is main.ts.The main.ts file creates a browser environment for 
  //  the application to run, and, along with this, it also calls a function called bootstrapModule, 
  //  which bootstraps the application.