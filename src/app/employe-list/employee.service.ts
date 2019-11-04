import { Injectable } from '@angular/core';

@Injectable({// pravi injectable kako se ne bi kopitao kod  pravi se sa (ng g s ime)
  //nakon ovog ukljucuje employe service u app modul
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){ // pravi listu kako bi izbacio is list i detail component kako s ene bi kopirao i ponavlja kod
    return[
      {"id":1, "name": "Alma", "age": 23},
    {"id":2, "name": "Armin", "age": 26},
    {"id":3, "name": "Alma2", "age": 25},
    {"id":4, "name": "Armin2", "age": 27}
    ]
  }
}
