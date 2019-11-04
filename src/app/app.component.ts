import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "Alma"; //dodaje property name i ukljucuje u app.component html kao parentData a nakon toga u structural directive
//slanje podataka iz parent to child component i ispisivanje u child component

public message=""; //pravi property message koji je u app.component html dodan a poruka se nalazi u child tj u structural
// ovo je slanje poruke sa child to parent
}
