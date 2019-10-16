import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TabComponent } from './tab/tab.component';
import { TabDirective } from './tab/tab.directive';
import { ChatboxComponent } from './chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TabComponent,
    TabDirective,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
