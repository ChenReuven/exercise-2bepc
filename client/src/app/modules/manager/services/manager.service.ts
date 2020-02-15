import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { APP_APIS_URL } from 'src/app/constants/app-apis-url.const';
import { catchError } from 'rxjs/operators';
import { HttpErrorService } from 'src/app/shared/services/http-error.service';
import { Manager } from 'src/app/data/models/manager.interface';
import { TaskDto } from 'src/app/data/models/dto/task-dto';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private httpErrorService: HttpErrorService
  ) {}
  getManagers(): Observable<Manager[]> {
    return this.http
      .get<Manager[]>(APP_APIS_URL.managers_url)
      .pipe(catchError((err) => {
        return this.httpErrorService.handleError(err);
      }));
  }

  getManager(managerId: string): Observable<Manager> {
    return this.http
      .get<Employee>(APP_APIS_URL.getManagerDetailsUrl(managerId))
      .pipe(catchError((err) => {
        return this.httpErrorService.handleError(err);
      }));
  }

  report(reportDto: ReportDto): void {
    this.http
      .post<Manager>(APP_APIS_URL.managers_reports_url, {
        text: reportDto.report.text,
        date: reportDto.report.date,
        managerId: reportDto.managerId,
        employeeId: reportDto.employeeId
      })
      .pipe(catchError((err) => {
        return this.httpErrorService.handleError(err);
      }))
      .subscribe(data => {
        this.openSnackBar('Report Success', 'Close');
      });
  }

  assignTask(taskDto: TaskDto): void {
    this.http
      .post<Manager>(APP_APIS_URL.managers_assign_task_url, {
        text: taskDto.task.text,
        assignDate: taskDto.task.assignDate,
        dueDate: taskDto.task.dueDate,
        managerId: taskDto.managerId,
        employeeId: taskDto.employeeId
      })
      .pipe(catchError((err) => {
        return this.httpErrorService.handleError(err);
      }))
      .subscribe(data => {
        this.openSnackBar('Assign Task Successfully', 'Close');
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
