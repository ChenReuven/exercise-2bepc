import { Manager } from '../models/manager.interface';

export const managersMock: Manager[] = [
  {
    _id: '1',
    firstName: 'John Manager',
    lastName: 'Doe Manager',
    position: 'p1',
    manager: {
      _id: '2',
      firstName: 'Yana Manager',
      lastName: 'Mals Manager',
      position: 'p2'
    },
    tasks: [{
      text: 'manager 1 task 1',
      assignDate: new Date(),
      dueDate: new Date()
    }],
    subordinates: [{
      _id: '1',
      firstName: 'John',
      lastName: 'Doe',
      position: 'p1'
    }],
    reports: [{
      text: 'report from employye 1',
      date: new Date()
    }]
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
