import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Person } from 'src/app/data/models/person.interface';
import { personType } from 'src/app/data/models/person-type';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonListComponent {
  @Input() persons: Person[];
  @Input() personType: personType;

  constructor() {}
}
