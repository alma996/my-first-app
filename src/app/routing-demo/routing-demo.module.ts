import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingDemoRoutingModule } from './routing-demo-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


@NgModule({
  declarations: [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailsComponent, DepartmentOverviewComponent, DepartmentContactComponent],
  imports: [
    CommonModule,
    RoutingDemoRoutingModule
  ]
})
export class RoutingDemoModule { }
