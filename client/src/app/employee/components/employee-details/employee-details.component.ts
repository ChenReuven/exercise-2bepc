import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/data/models/person.interface';
import { Report } from 'src/app/data/models/report.interface';
import { Employee } from 'src/app/data/models/employee.interface';
import { ReportDto } from 'src/app/data/models/dto/report-dto';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  onReport(report: Report, employee: Employee) {
    const {_id: id, manager} = employee;
    const reportDto: ReportDto = {
      employeeId: id,
      managerId: manager._id,
      report
    };
    this.employeeService.report(reportDto);
  }
}
