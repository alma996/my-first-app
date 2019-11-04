import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-structural-directive',
  template: `
  <h2 *ngIf="false">
  Codevolution
  </h2>

  <h2 *ngIf="displayName">
  Codevolution2
  </h2>

  <h2 *ngIf="displayName; else elseBlock">
  Codevolution3
  </h2>

<ng-template #elseBlock>
  <h2>
  Name is hidden
  </h2>
  </ng-template>

<div *ngIf="displayName; then thenBlock; else elseBlock2"></div>
  <ng-template #thenBlock>
  <h2>
  Alma
  </h2>
  </ng-template>

  <ng-template #elseBlock2>
  <h2>
  Name is hidden
  </h2>
  </ng-template>

  <div [ngSwitch]="color">
  <div *ngSwitchCase = "'red'">You picked red color</div>
  <div *ngSwitchCase = "'green'">You picked green color</div>
  <div *ngSwitchCase = "'black'">You picked black color</div>
  <div *ngSwitchDefault>Pick Again</div>
  </div>

  <div *ngFor="let c of colors; index as i">
  <h2>{{i}} {{c}}</h2>
  </div>

  <h2>{{"Hello" + parentData}}</h2>
  <h2>{{"Hello2 " + name}}</h2>

  <button (click)="fireEvent()">Send Event</button>

  <h2>{{name2}}</h2>
  <h2>{{name2 | lowercase}}</h2>
  <h2>{{name2 | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{name2 | slice:3:5}}</h2>
  <h2>{{person | json}}</h2>

  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{5.678 | number:'3.1-2'}}</h2>

  <h2>{{0.25 | percent}}</h2>

  <h2>{{0.25 | currency}}</h2>
  <h2>{{0.25 | currency: 'EUR': 'code'}}</h2>

  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>

  <h2>{{date | date:'medium'}}</h2>
  <h2>{{date | date:'mediumDate'}}</h2>
  <h2>{{date | date:'mediumTime'}}</h2>

  <h2>{{date | date:'long'}}</h2>
  <h2>{{date | date:'longDate'}}</h2>
  <h2>{{date | date:'longTime'}}</h2>

  `,

  /*ngIf bez propertya tru prikazue na ekranu false ne prikazuje

  ngIf sa property displayName

  ngIf and else

  drugi nacin prikaza ngIf and ese bloka

  switchCase

  for case uzima boju od colors liste ispisuje jendu po jednu
  index as i ispisuje index niza
  first as f ispisuje true za orvi u nizu false za ostale
  last as l ispisuje tru za zadnji u nizu a false za ostale
  odd as o ispisuje tru za neparne false za pstale
  even as e ispisuje tru za parne false za ostale

  Dodaje parentData iz property
  Drugi nacin

  Button za slanje poruke sa child to parent odnosmp sa structural to app.ts

  Ispisuje imena (pipe)
  */
  styles: []
})
export class StructuralDirectiveComponent implements OnInit {

  @Input() public parentData; //ukljucuje parent data iz app.component
  @Input('parentData') public name; // drugi nacin ukljucuje parent data iz app.component

  @Output() public childEvent = new EventEmitter(); //kreira instancu a output da sa child salje parent

  displayName = false;

  public color="white" //Boja za switch case

  public colors=["red", "blue", "green", "black", "yellow"]; //boje za for case

  public name2="Alma Armin"; // pravi property za rad sa pipe
  public message="Dobro dosli";
  public person = {
    "firstName" : "Alma",
    "lastName" : "Sadikovic"
  }
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Alma Sadikovic');
  }

}
