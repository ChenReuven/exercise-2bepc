import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { TasksModule } from './tasks/tasks.module';
import { ReportsModule } from './reports/reports.module';
import { ManagersModule } from './managers/managers.module';
import { APP_CONST } from './constants/app.const';

@Module({
  imports: [
    MongooseModule.forRoot(APP_CONST.MONGO_DB_URL),
    EmployeesModule,
    ManagersModule,
    TasksModule,
    ReportsModule,
  ],
})
export class AppModule {}
