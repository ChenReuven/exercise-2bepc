import { Person } from './person.interface';
import { Employee } from './employee.interface';

// tslint:disable-next-line: no-empty-interface
export interface Manager extends Person {
  subordinates?: Employee[];
}
