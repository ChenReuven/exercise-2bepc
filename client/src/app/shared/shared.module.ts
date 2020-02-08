import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { ReportDialogComponent } from './components/dialogs/report-dialog/report-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignTaskDialogComponent } from './components/dialogs/assign-task-dialog/assign-task-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PersonListComponent } from './components/person-list/person-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PersonListComponent, PersonDetailsComponent, ReportDialogComponent, AssignTaskDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
  ],
  entryComponents: [ReportDialogComponent, AssignTaskDialogComponent],
  exports: [PersonListComponent, PersonDetailsComponent]
})
export class SharedModule {}
