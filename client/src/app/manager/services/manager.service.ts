import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { employeesMock } from 'src/app/data/mocks/employees.mock';
import { ReportDto } from 'src/app/data/models/dto/report-dto';
import {MatSnackBar} from '@angular/material/snack-bar';
import { managersMock } from 'src/app/data/mocks/managers.mock';
import { Manager } from 'src/app/data/models/manager.interface';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private _snackBar: MatSnackBar){}
  getManagers(): Observable<Employee[]> {
    return of(managersMock);
  }

  getManager(managerId: string): Observable<Manager> {
    // tslint:disable-next-line: no-shadowed-variable
    const manager: Manager = managersMock.find((manager: Manager) => manager.id === managerId);
    return of(manager);
  }

  // assignTask(reportDto: ReportDto) {
  //   // call to employee report service
  //   this.openSnackBar('Report Success', 'close');
  //   return of({});
  // }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
