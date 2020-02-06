import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/data/models/person.interface';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  @Input() person: Person;

  constructor() {}

  ngOnInit() {}
}
