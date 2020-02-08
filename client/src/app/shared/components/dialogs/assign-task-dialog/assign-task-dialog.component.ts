import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/data/models/task.interface';

@Component({
  selector: 'app-assign-task-dialog',
  template: `
    <h1 mat-dialog-title>Assign Task</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>What's your task?</mat-label>
        <input matInput [(ngModel)]="taskTextModel" />
      </mat-form-field>

      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="dueDatepicker" [(ngModel)]="dueDate"/>
        <mat-datepicker-toggle matSuffix [for]="dueDatepicker"></mat-datepicker-toggle>
        <mat-datepicker #dueDatepicker></mat-datepicker>
      </mat-form-field>
    </div>

    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button
        [disabled]="!isTaskFormValid(taskTextModel, dueDate)"
        mat-button
        (click)="onAssignTask(taskTextModel, dueDate)"
        cdkFocusInitial
      >
        Save
      </button>
    </div>
  `
})
export class AssignTaskDialogComponent {
  taskTextModel: string;
  dueDate: Date;
  constructor(public dialogRef: MatDialogRef<AssignTaskDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAssignTask(taskTextModel: string, dueDate: Date): void {
    const task: Task = {
      assignDate: new Date(),
      dueDate,
      text: taskTextModel
    };
    this.dialogRef.close(task);
  }

  isTaskFormValid(taskTextModel: string, dueDate: Date): boolean {
    return taskTextModel && taskTextModel !== '' && dueDate !== undefined;
  }
}
