import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { APP_APIS_URL } from 'src/app/constants/app-apis-url.const';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(APP_APIS_URL.employees_url);
  }

  getEmployee(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(APP_APIS_URL.getEmployeeDetailsUrl(employeeId));
  }

  report(reportDto: ReportDto): void {
    this.http
      .post<Employee>(APP_APIS_URL.employees_reports_url, {
        text: reportDto.report.text,
        date: reportDto.report.date,
        managerId: reportDto.managerId,
        employeeId: reportDto.employeeId
      })
      .subscribe(data => {
        this.openSnackBar('Report Success', 'Close');
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
