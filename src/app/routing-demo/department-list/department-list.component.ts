import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
   <h3>
   Department List
   </h3>
   <ul class="items">
   <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
   <span class="badge">{{department.id}}</span> {{department.name}}
   </li>
   </ul>
  `,
  //dodaje click i pravi metod onSelect
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [ //nakon sto napravimo listu i ukljucimo u template kreiramo department detail na ng g c
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"},
  ]

  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { } //injcetiion nakon sto se importuje router dodaje se u constructor

  ngOnInit() {//nakon sto smo ukljucli avtiveRoute kopirao kod iz department detail
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId =id; //prikazuje novi id nakon next or previous
    })
  }

  onSelect(department){
   //Kako ne bi morali mijenjati path u svim folderima rucno koristimo relativ navigation
   // this.router.navigate(['/departments', department.id]); //prosljedjujemo path i ono sto zelimo da nam prikaze u ovom slucaju je to id
//ako zelimo da id iz urla prikazemo na stranici idemo u department details
    this.router.navigate([department.id], {relativeTo: this.route});
}

  isSelected(department){
    return department.id === this.selectedId; //provjerava da li je id jednak selektovanom id, te ukljucujemo u template
  }

}
