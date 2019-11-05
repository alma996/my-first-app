import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = []; // kreira routing demo za vise stranica
// unutar njega kreira department i employee list

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingDemoRoutingModule { }
