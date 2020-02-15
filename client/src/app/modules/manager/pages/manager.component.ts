import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/data/models/manager.interface';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerComponent implements OnInit {

  managers$: Observable<Manager[]>;

  constructor(private managerService: ManagerService) {}

  ngOnInit() {
    this.managers$ = this.managerService.getManagers();
  }

}
