import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data/models/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }
}
