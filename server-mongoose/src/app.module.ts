import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { EmployeesModule } from './employees/employees.module';
import { TasksModule } from './tasks/tasks.module';
import { ReportsModule } from './reports/reports.module';
import { ManagersModule } from './managers/managers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    CatsModule,
    OwnersModule,
    EmployeesModule,
    ManagersModule,
    TasksModule,
    ReportsModule,
  ],
})
export class AppModule {}
