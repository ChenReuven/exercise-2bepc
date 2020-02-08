import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/data/models/person.interface';
import { ManagerService } from '../services/manager.service';
import { Task } from 'src/app/data/models/task.interface';
import { Manager } from 'src/app/data/models/manager.interface';
import { TaskDto } from 'src/app/data/models/dto/task-dto';
import { Report } from 'src/app/data/models/report.interface';
import { ReportDto } from 'src/app/data/models/dto/report-dto';

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

  onReport(report: Report, managerObj: Manager) {
    const {id, manager} = managerObj;
    const reportDto: ReportDto = {
      employeeId: id,
      managerId: manager.id,
      report
    };
    this.managerService.report(reportDto);
  }

  onAssignTask(task: Task, manager: Manager) {
    const {id} = manager;
    const taskDto: TaskDto = {
      employeeId: id,
      managerId: manager.id,
      task
    };
    this.managerService.assignTask(taskDto);
  }
}
