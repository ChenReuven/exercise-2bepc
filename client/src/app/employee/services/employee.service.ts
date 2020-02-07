import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';
import { employeesMock } from 'src/app/data/mocks/persons.mock';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    return of(employeesMock);
  }

  getEmployee(employeeId: string): Observable<Employee> {
    // tslint:disable-next-line: no-shadowed-variable
    const employee: Employee = employeesMock.find((employee: Employee) => employee.id === employeeId);
    return of(employee);
  }
}
