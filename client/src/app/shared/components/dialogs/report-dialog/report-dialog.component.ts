import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Report } from 'src/app/data/models/report.interface';

@Component({
  selector: "app-report-dialog",
  template: `
    <h1 mat-dialog-title>Report</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>What's your report?</mat-label>
        <input matInput [(ngModel)]="reportTextModel" />
      </mat-form-field>
    </div>

    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button [disabled]="!isReportValid(reportTextModel)" mat-button (click)="onReport(reportTextModel)" cdkFocusInitial>
        Report
      </button>
    </div>
  `
})
export class ReportDialogComponent {
  reportTextModel: string;
  constructor(public dialogRef: MatDialogRef<ReportDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onReport(reportTextModel: string): void {
    const report: Report = {
      date: new Date(),
      text: reportTextModel
    }
    this.dialogRef.close(report);
  }

  isReportValid(reportTextModel: string): boolean {
    return reportTextModel && reportTextModel !== '';
  }
}
