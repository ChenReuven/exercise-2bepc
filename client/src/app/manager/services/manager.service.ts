import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { managersMock } from 'src/app/data/mocks/managers.mock';
import { Manager } from 'src/app/data/models/manager.interface';
import { TaskDto } from 'src/app/data/models/dto/task-dto';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  getManagers(): Observable<Manager[]> {
    // return of(managersMock);
    return this.http.get<Manager[]>('/managers');
  }

  getManager(managerId: string): Observable<Manager> {
    // tslint:disable-next-line: no-shadowed-variable
    const manager: Manager = managersMock.find(
      (manager: Manager) => manager._id === managerId
    );
    // return of(manager);
    return this.http.get<Employee>('/managers/' + managerId);
  }

  report(reportDto: ReportDto) {
    // call to employee report service
    this.openSnackBar('Report Success', 'close');
    return of({});
  }

  assignTask(taskDto: TaskDto) {
    this.openSnackBar('Assign Task Successfully', 'Cancel');
    return of({});
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
