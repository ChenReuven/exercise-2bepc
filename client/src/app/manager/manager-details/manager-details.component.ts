import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/data/models/person.interface';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss']
})
export class ManagerDetailsComponent implements OnInit {
  manager$: Observable<Person>;

  constructor(private route: ActivatedRoute, private managerService: ManagerService) {}

  ngOnInit() {
    this.loadManager();
  }

  loadManager(): void {
    const managerId = this.route.snapshot.paramMap.get('id');
    this.manager$ = this.managerService.getManager(managerId);
  }

  // onReport(report: Report, employee: Employee) {
  //   const {id, manager} = employee;
  //   const reportDto: ReportDto = {
  //     employeeId: id,
  //     managerId: manager.id,
  //     report
  //   };
  //   this.employeeService.report(reportDto);
  // }
}
