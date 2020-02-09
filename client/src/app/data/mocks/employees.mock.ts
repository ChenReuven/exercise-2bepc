import { Person } from '../models/person.interface';

export const employeesMock: Person[] = [
  {
    _id: '1',
    firstName: 'John',
    lastName: 'Doe',
    position: 'p1',
    manager: {
      _id: '1',
      firstName: 'John',
      lastName: 'Doe'
    },
    tasks: [{
      text: 'report 1',
      assignDate: new Date(),
      dueDate: new Date()
    }],
  },
  {
    _id: '2',
    firstName: 'Yana',
    lastName: 'Mals',
    position: 'p2'
  },
  {
    _id: '3',
    firstName: 'Ronnen',
    lastName: 'yalner',
    position: 'p3'
  }
];
