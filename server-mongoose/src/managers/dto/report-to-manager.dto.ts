export class ReportToManagerDto {
  readonly text: string;
  readonly reportDate: Date;

  readonly managerId: string;
  readonly employeeId: string;
}
