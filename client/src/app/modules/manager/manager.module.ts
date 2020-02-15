import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagerComponent} from './pages/manager.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ManagerService } from './services/manager.service';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ManagerComponent, ManagerDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    SharedModule
  ],
  providers: [ManagerService]
})
export class ManagerModule { }
