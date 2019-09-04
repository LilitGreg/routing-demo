import { Component } from '@angular/core';

/*Angular 6  changes
---------Angular 6 framework changes

1.Before animation we can import from
import from @angular/core
Angular 6 --import from @angular/animations

2.<template> tag removes
Angular 6 <ng-template> should be used instead
template:`
 <h2 *ngIf ="displayName; else nameElseBlock">
   Codevolution 
 </h2>
 <ng-template #nameElseBlock> 
   <h2>
    Name is hidden
   </h2>
 </ng-template>
`

3.Registering providers
Early if we have a service to make use a service
we need register it with the injector in the particular module.
We need import it and add in the providers array:

 import {EmployeeService} from './employee.service';
 providers: [EmployeeService],

 Angular 6 we can do it in the service itself.For do that is using
 providedIn property in the @Injectable decorative.ProvidedIn tells 
 Angular that root injector is responsible for creating the instance of the service.
  
 @Injectable({
   // We declate that this servie should be created
   //by the root application injector
   providedIn : 'root',

 })
 export class EmployeeServie {

 }
 4.ngModelChange

 Before:
  <input [(ngModel)] = "name" (ngModelChange) = "onChange($event)">

  onChange(value) {
    console.log(value); // would be updated value
  }

  However: in this case

  <input #modelDir ="ngModel"[(ngModel)] = "name" (ngModelChange) = onChange(modelDir) >

  onChange(ngModel:NgModel) {
    console.log(ngModel.value); // would log old value, not  updated value
  }

   In Angular 6 

   onChange(ngModel:NgModel) {
    console.log(ngModel.value); // will log updated value
  } 

  ------------------------Angular CLI 6


   ng update <package>
  --analyeses your package.json
  --recommend updates to your application
  --3rd parties can provide update scripts using schematics
  --automatically update your code

  ng add
  add new capabilites to your application
  ng add @angular/material

  angular.json intead of .angular-cli.json

  -----------------------CLi + Material starter templates
  1.Material Sidenav
  ng generate @angular/material:material-nav --name = my-nav
  It is also responsive.
  2.Dashboard
  ng generate @angular/material:material-dashboard --name = my-dashboard
  3.Datatable
  ng generate @angular/material:material-table --name = my-table
   Give Sorting and  pagination capabilites


   ---------Angular Elements

   1.Angular Elements give us ability to use our Angular components in other 
   environments, such as vue.js application.
   Wrap an angular component in a custom element

  export class AppModule {
    constructor(private injector: Injector) {}
    ngDoBootstrap() {
      const AppElement = createCustomElement (AppComponent , {
        injector: this.injector});
        customElements.define ('my-app' , AppElement);
      }
    }
  }

   -----Ivy 
   Next generation rendering engine
   Increase the speed and decrease the application size
   Out in the near future




    

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
}
