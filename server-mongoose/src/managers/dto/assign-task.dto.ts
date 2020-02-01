export class AssignTaskDto {
  readonly text: string;
  readonly assignDate: Date;
  readonly dueDate: Date;

  readonly managerId: string;
  readonly employeeId: string;
}
