import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employe-list',
  template: `
  <h2> Employe List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeList implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { } //ukljucuje employe service

  ngOnInit() {
    // prvi primjer bez http requesta this.employees=this._employeeService.getEmployees(); //uzima getEmplyess metod iz employes service
  // kad uzme getEmployyes ubacuje ih u empleyyes[] to isto u empleye details
 
  this._employeeService.getEmployees()
  .subscribe(data => this.employees = data,
    error => this.errorMsg = error);
}

}
