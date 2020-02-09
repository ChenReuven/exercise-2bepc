import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { employeesMock } from 'src/app/data/mocks/employees.mock';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  getEmployees(): Observable<Employee[]> {
    this.http.get<Employee[]>('/employees').subscribe(data => {
      console.log('employees = ', data);
    });
    // return of(employeesMock);
    return this.http.get<Employee[]>('/employees');
  }

  getEmployee(employeeId: string): Observable<Employee> {
    // tslint:disable-next-line: no-shadowed-variable
    const employee: Employee = employeesMock.find(
      (employee: Employee) => employee._id === employeeId
    );
    // return of(employee);
    return this.http.get<Employee>('/employees/' + employeeId);
  }

  report(reportDto: ReportDto) {
    this.http
      .post<Employee>('/employees/report', {
        text: reportDto.report.text,
        date: reportDto.report.date,
        managerId: reportDto.managerId,
        employeeId: reportDto.employeeId
      })
      .subscribe(data => {
        this.openSnackBar('Report Success', 'close');
      });
    return of({});
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
