import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsService } from 'src/reports/reports.service';
import { TasksService } from 'src/tasks/tasks.service';
import { ManagersController } from './manager.controller';
import { ManagersService } from './managers.service';
import { ManagerSchema } from './schemas/manager.schema';
import { TaskSchema } from 'src/tasks/schemas/task.schema';
import { ReportSchema } from 'src/reports/schemas/report.schema';
import { EmployeesModule } from 'src/employees/employees.module';
import { EmployeeSchema } from 'src/employees/schemas/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Manager', schema: ManagerSchema }]),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
    MongooseModule.forFeature([{ name: 'Report', schema: ReportSchema }]),
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
    EmployeesModule,
  ],
  controllers: [ManagersController],
  providers: [ManagersService, TasksService, ReportsService],
})
export class ManagersModule {}
