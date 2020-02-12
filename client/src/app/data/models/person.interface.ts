import { Manager } from './manager.interface';
import { Report } from './report.interface';
import { Task } from './task.interface';

export interface Person {
  _id: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  position?: string;
  manager?: Manager;
  reports?: Report[];
  tasks?: Task[];
}
