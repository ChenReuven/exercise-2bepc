import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Person } from 'src/app/data/models/person.interface';
import { MatDialog } from '@angular/material/dialog';
import { Report } from 'src/app/data/models/report.interface';
import { ReportDialogComponent } from '../dialogs/report-dialog/report-dialog.component';
import { AssignTaskDialogComponent } from '../dialogs/assign-task-dialog/assign-task-dialog.component';
import { Task } from 'src/app/data/models/task.interface';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailsComponent {
  @Input() person: Person;
  @Output() report = new EventEmitter<Report>();
  @Output() assignTask = new EventEmitter<any>();

  devMode = false;

  constructor(public dialog: MatDialog) {}

  onReport(person: Person): void {
    this.openReportDialog(person);
  }

  openReportDialog(person: Person): void {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe((report: Report) => {
      if (!report) { return; }
      this.report.emit(report);
    });
  }

  onAssignTask(person: Person): void {
    this.openAssignTaskDialog(person);
  }

  openAssignTaskDialog(person: Person): void {
    const dialogRef = this.dialog.open(AssignTaskDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe((task: Task) => {
      if (!task) { return; }
      this.assignTask.emit({task, personId: person._id});
    });
  }

}
