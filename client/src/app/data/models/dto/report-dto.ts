import { Report } from '../report.interface';

export interface ReportDto {
  readonly report: Report;

  readonly managerId: string;
  readonly employeeId: string;
}
