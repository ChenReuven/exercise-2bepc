import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from './pages/employee.component';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule
  ]
})
export class EmployeeModule { }
