import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/data/models/person.interface';
import { MatDialog } from '@angular/material/dialog';
import { Report } from 'src/app/data/models/report.interface';
import { ReportDialogComponent } from '../dialogs/report-dialog/report-dialog.component';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  @Input() person: Person;
  @Output() report = new EventEmitter<Report>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onReport(person: Person) {
    this.openReportDialog(person);
  }

  openReportDialog(person: Person): void {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((report: Report) => {
      if (!report) { return; }
      this.report.emit(report);
    });
  }

}
