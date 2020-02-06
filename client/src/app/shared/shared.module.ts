import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { PersonDetailsComponent } from './components/person-details/person-details.component';


@NgModule({
  declarations: [PersonDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [PersonDetailsComponent]
})
export class SharedModule { }
