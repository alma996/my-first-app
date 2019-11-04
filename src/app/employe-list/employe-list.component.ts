import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employe-list',
  template: `
  <h2> Employe List</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeList implements OnInit {

  public employees = []

  constructor(private _employeeService: EmployeeService) { } //ukljucuje employe service

  ngOnInit() {
    this.employees=this._employeeService.getEmployees(); //uzima getEmplyess metod iz employes service
  // kad uzme getEmployyes ubacuje ih u empleyyes[] to isto u empleye details
  }

}
