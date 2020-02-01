import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './employee.controller';
import { EmployeeSchema } from './schemas/employee.schema';
import { EmployeesService } from './employees.service';
import { ReportsService } from 'src/reports/reports.service';
import { TasksService } from 'src/tasks/tasks.service';
import { TaskSchema } from 'src/tasks/schemas/task.schema';
import { ReportSchema } from 'src/reports/schemas/report.schema';
import { ManagersService } from 'src/managers/managers.service';
import { ManagerSchema } from 'src/managers/schemas/manager.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
    MongooseModule.forFeature([{ name: 'Report', schema: ReportSchema }]),
    MongooseModule.forFeature([{ name: 'Manager', schema: ManagerSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, TasksService, ReportsService, ManagersService],
})
export class EmployeesModule {}
