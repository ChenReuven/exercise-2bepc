import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APP_APIS_URL } from 'src/app/constants/app-apis-url.const';
import { catchError } from 'rxjs/operators';
import { HttpErrorService } from 'src/app/shared/services/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private httpErrorService: HttpErrorService
  ) {}

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(APP_APIS_URL.employees_url)
      .pipe(catchError(this.httpErrorService.handleError.bind(this)));
  }

  getEmployee(employeeId: string): Observable<Employee> {
    return this.http
      .get<Employee>(APP_APIS_URL.getEmployeeDetailsUrl(employeeId))
      .pipe(catchError(this.httpErrorService.handleError.bind(this)));
  }

  report(reportDto: ReportDto): void {
    this.http
      .post<Employee>(APP_APIS_URL.employees_reports_url, {
        text: reportDto.report.text,
        date: reportDto.report.date,
        managerId: reportDto.managerId,
        employeeId: reportDto.employeeId
      })
      .pipe(catchError(this.httpErrorService.handleError.bind(this)))
      .subscribe(data => {
        this.openSnackBar('Report Success', 'Close');
      })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
