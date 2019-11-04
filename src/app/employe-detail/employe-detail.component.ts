import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employe-list/employee.service';

@Component({
  selector: 'app-employe-detail',
  template: `
  <h2> Employe List</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeDetail implements OnInit {

  public employees = []

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}
