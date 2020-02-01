import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app.routing.module';
import {EmployeeModule} from './employee/employee.module';
import {ManagerModule} from './manager/manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    EmployeeModule,
    ManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
