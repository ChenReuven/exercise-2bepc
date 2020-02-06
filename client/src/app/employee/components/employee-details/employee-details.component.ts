import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/data/models/person.interface';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee$: Observable<Person>;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    this.employee$ = this.employeeService.getEmployee(employeeId);
  }
}
