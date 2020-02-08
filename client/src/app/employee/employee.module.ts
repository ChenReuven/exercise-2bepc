import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './pages/employee.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { SharedModule } from '../shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
    MatSnackBarModule
  ]
})
export class EmployeeModule {}
