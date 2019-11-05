import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './routing-demo/department-list/department-list.component';
import { EmployeeListComponent } from './routing-demo/employee-list/employee-list.component';
import { PageNotFoundComponent } from './routing-demo/page-not-found/page-not-found.component';
import { match } from 'minimatch';
import { DepartmentDetailsComponent } from './routing-demo/department-details/department-details.component';
import { DepartmentOverviewComponent } from './routing-demo/department-overview/department-overview.component';
import { DepartmentContactComponent } from './routing-demo/department-contact/department-contact.component';


const routes: Routes=[//drugi korak konfigurisati routing
    { path: '', redirectTo: '/departments', pathMatch: 'full'},//Cim pokrenemo localhoct automatski otvara department ako je 'full'
    { path: 'departments', component: DepartmentListComponent}, //nakon sto je kreiran nogi nh g c ukljuci se ovdje
    { 
        path: 'departments/:id', 
        component: DepartmentDetailsComponent,//dodaje departents details koji ce ispisati id   
        children: [ //ove komponente ce biti prikazn esamo unutar details zato i jesu child
            {path: 'overview', component: DepartmentOverviewComponent},
            {path: 'contact', component: DepartmentContactComponent},
        ]
    },
    { path: 'employees', component: EmployeeListComponent},
    { path: "**", component: PageNotFoundComponent}//path za error (wildcard)
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],//imposrtuje i exportuje router model, dodjeljiti routes
    //nakon tog aimpostovad u appmodule
    exports: [RouterModule]
  
 
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailsComponent, DepartmentOverviewComponent, DepartmentContactComponent]//exportuje component da ih ne mora zasebno importovat