import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TabComponent } from './tab/tab.component';
const routes: Routes = [
  {
    path : 'table',
    component: TableComponent
  },
  {
    path : 'tab',
    component: TabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
