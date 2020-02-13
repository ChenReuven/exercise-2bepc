import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Manager } from 'src/app/data/models/manager.interface';
import { TaskDto } from 'src/app/data/models/dto/task-dto';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import { HttpClient } from '@angular/common/http';
import { APP_APIS_URL } from 'src/app/constants/app-apis-url.const';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(APP_APIS_URL.managers_url);
  }

  getManager(managerId: string): Observable<Manager> {
    return this.http.get<Employee>(APP_APIS_URL.getManagerDetailsUrl(managerId));
  }

  report(reportDto: ReportDto): void {
     this.http
      .post<Manager>(APP_APIS_URL.managers_reports_url, {
        text: reportDto.report.text,
        date: reportDto.report.date,
        managerId: reportDto.managerId,
        employeeId: reportDto.employeeId
      })
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
