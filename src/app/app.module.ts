import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { navbarComponent } from './navbar/navbar';
import { todolistComponent} from './todolist/todolist';
import { stocksIntradayComponent } from './stocks/intraday';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, HelloComponent, navbarComponent, todolistComponent, stocksIntradayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
