import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { EmployeList } from './employe-list/employe-list.component';
import { EmployeDetail } from './employe-detail/employe-detail.component';
import { EmployeeService } from './employe-list/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectiveComponent,
    EmployeList,
    EmployeDetail
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService], //ukljucuje employe service
  // nakon ovoga vraca se u employe list i u constructor
  bootstrap: [AppComponent]
})
export class AppModule { }
