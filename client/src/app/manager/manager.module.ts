import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagerComponent} from './pages/manager.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ManagerService } from './services/manager.service';

@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [ManagerService]
})
export class ManagerModule { }
