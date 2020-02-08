import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { employeesMock } from 'src/app/data/mocks/employees.mock';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _snackBar: MatSnackBar){}
  getEmployees(): Observable<Employee[]> {
    return of(employeesMock);
  }

  getEmployee(employeeId: string): Observable<Employee> {
    // tslint:disable-next-line: no-shadowed-variable
    const employee: Employee = employeesMock.find((employee: Employee) => employee.id === employeeId);
    return of(employee);
  }

  report(reportDto: ReportDto) {
    // call to employee report service
    this.openSnackBar('Report Success', 'close');
    return of({});
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
