import { Report } from '../report.interface';
import { Task } from '../task.interface';

export interface TaskDto {
  readonly task: Task;

  readonly managerId: string;
  readonly employeeId: string;
}
