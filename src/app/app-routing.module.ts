import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TabComponent } from './tab/tab.component';
import {ChatboxComponent} from './chatbox/chatbox.component';
const routes: Routes = [
  {
    path : 'table',
    component: TableComponent
  },
  {
    path : 'tab',
    component: TabComponent
  },
  {
    path : 'chatbox',
    component: ChatboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
