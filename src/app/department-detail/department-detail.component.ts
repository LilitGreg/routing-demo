import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    You selected with id = {{departmentId}}
    </h3>
     <p>
       <button (click) = "showOverview()"> Overview </button>
       <button (click) = "showContact()"> Contact </button>
     </p>
    <router-outlet>  </router-outlet> 

    <p>
    <button (click) ="goPrevious()"> Previous </button>
    <button (click) ="goNext()"> Next </button>
    </p>

    <div>
     <button (click) = "gotoDepartments()"> Back </button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   // let id = parseInt(this.route.snapshot.paramMap.get('id'));
   //this.departmentId =id;
   /*
   How to read parameter values using param observable?

    paramMap method returns observable so we get the data only if we subscribe to it.
    
    paramMap api provide us with the get method to retrieve the id parameter.
   */
   this.route.paramMap.subscribe((params: ParamMap )=> {
     let id = parseInt(params.get('id'));
     this.departmentId = id;
   } );
  }

  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId: null;
    // this.router.navigate(['/departments', {id: selectedId, test:'testa'}]);
     //:id=1  is optional because its existence doesnot effect at view.
     //but they can be used to apply some logic to the view.
    this.router.navigate(['../', {id: selectedId}], {relativeTo:this.route} )
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo:this.route})
  }

}
