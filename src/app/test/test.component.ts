import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
  `
  <h2>Welcome {{name}}</h2>
  <h2>{{4+4}}</h2>
  <h2>{{"Welcome " + name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{site}}</h2>

  <input [id]="myId" type="text" value="Armin">
  <input disabled id={{myId}} type="text" value="Armin">

  <h2 class="text-sucess">Boja</h2>
  <h2 [class]="successClass">Boja2</h2>
  <h2 [class.text-danger]="hasError">Boja</h2>
  <h2 [ngClass]="messageClasses">Boja3</h2>

  <h2 [style.color]="'orange'">Style Binding</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding2</h2>
  <h2 [ngStyle]="titleStyle">Style Binding</h2>

  <button (click)="onClick()">OK</button>
  {{ok}}

  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>

<br><br>
  <input [(ngModel)]="name2" type="text"> {{name2}}
`
/* Ispisuje ime koje je navedeno u klasi
Ispisuje rezultat 
Ispisuje ime na drugi nacin
Ispisuje brpj slova
Ispisuje ime kao velika slova
Ispisuje ime pomocu metode
Vraca url trenutnog sitea

Pravi input i ispsuje vrijednost unutra njega i dodaje mu id
drugi nacin dodavanja id-a sa disable opcijom a moze i [disabled]="true/false" 
ili [disabled]="isDisabled" poziva se property

Poziva clasu koja boji text u zeleno
Boji text pomocu propertya
Bpji text pomocu property hasError
Boji tekst pomocu ng klase

Boji u narandzasto bez predhodno srefinisanog style
Ako je hassError true boji u crveno ako je false u zeleno
Boji u plavo pomocu propertya
Poziva ng style i boji i stilizira

Pravi dugme i poziva metodu onClick
Ispisuje text nakon klika na dugme pomocu this u metodi ok
Ako u praznu zagranu onClick($event)dodamo event i u metodi i u console dobit cemo sve detalje

Ispisuje value inputa nakon klika na button u console

Napravi input koji se biti sinhronizovan sa property odnsono pravi ngModel koji sluzi za sync
*/
  ,
  styles: [
    `
    .text-sucess{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {

  public name = "Alma";
  public site = window.location.href; //Uzima url trenutnog sitea
  public myId ="myId"; //Kreira id
  public isDisabled =true; //pravi isdiabled za input true/false
  public successClass = "text-sucess"; //property za boju
  public hasError = false; //je li boja tru or false ako je tru bojat ce ako je false nece
  public isSpecial = true; // textu classi special je true
  public messageClasses = { //postavlja style da li je error
    "text-sucess": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial

  }
  public highlightColor="blue"; //PLava boja property
  public titleStyle = { //Kreira boju i style za text
    color: "yellow",
    fontStyle: "italic"
  }

  public ok="";

  public name2=""; // napravljen property name za sync

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }
  //hvata ime i poziva se u template

  onClick(){ //pravi metodu on click
    console.log("Alma S")
    this.ok="Welcome Alma S"
  }

  logMessage(value){//ispisuje u consoli value
    console.log(value);
  }

}
