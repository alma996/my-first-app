import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employe-list/employee.service';

@Component({
  selector: 'app-employe-detail',
  template: `
  <h2> Employee Detail</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeDetail implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    // prvi primjer bez hhtp this.employees=this._employeeService.getEmployees();
  
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
      error => this.errorMsg = error);
  }

}
