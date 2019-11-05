import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
   <h3> You selected department with id = {{departmentId}} </h3>

  <p>
  <button (click)="showOverview()">Overview</button>
  <button (click)="showContact()">Contact</button>
  </p>
  <router-outlet></router-outlet>

  <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>

    <div>
    <button (click)="goToDepartments()">Back</button>
    </div>
   `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId; //pravi property kako bi prikazao na ekranu id

  constructor(private route: ActivatedRoute, private router: Router) { }//injection

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));//uzima id i prikazuje na ekranu
    //snapshot ne radi ako se promijeni id u url npr ne prikazuje na ekranu
    //this.departmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId =id; //prikazuje novi id nakon next or previous
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['departments', previousId]); //prikazj predhodnog ida
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['departments', nextId]);
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null; //selectuje id i provjerava je li null ovo je za opciju back
    //isto kao i departent list
    //this.router.navigate(['/departments', {id: selectedId}]); // navigate na stranicu
    // nakon ovoga zelimo da kada kliknemo na dugme back on prepozna na osnovu ida sta je bilo kliknuto i da to ostane selected idemo na department list
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){// za prikaz overview pathh ondnosno childern
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
