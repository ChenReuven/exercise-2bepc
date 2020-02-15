import { Person } from './person.interface';
import { Employee } from './employee.interface';

export interface Manager extends Person {
  subordinates?: Employee[];
}
