import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Manager } from './interface/manager.interface';
import { CreateManagerDto } from './dto/create-manager.dto';
import { ReportToManagerDto } from './dto/report-to-manager.dto';
import { ReportsService } from 'src/reports/reports.service';
import { AssignTaskDto } from './dto/assign-task.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/interface/employee.interface';

@Injectable()
export class ManagersService {
  constructor(
    @InjectModel('Manager') private readonly managerModel: Model<Manager>,
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
    private reportsService: ReportsService,
    private tasksService: TasksService,
  ) {}

  async create(createManagerDto: CreateManagerDto): Promise<Manager> {
    const createdCat = new this.managerModel(createManagerDto);
    return createdCat.save();
  }

  async reportToManager(reportToManagerDto: ReportToManagerDto): Promise<any> {
    // tslint:disable-next-line: no-shadowed-variable
    const { text, date, managerId, employeeId } = reportToManagerDto;
    // tslint:disable-next-line: no-shadowed-variable
    const report = await this.reportsService.create({text, date});
  }

  async assignTask(assignTaskDto: AssignTaskDto): Promise<any> {
    // tslint:disable-next-line: no-shadowed-variable
    const { text, assignDate, dueDate, employeeId } = assignTaskDto;

    const task = await this.tasksService.create({text, assignDate, dueDate});
    // await this.employeesService.assignTask({employeeId, taskId: task._id}); ///////
    await this.employeeModel.findOneAndUpdate({_id: employeeId}, { $push: { tasks: task._id }}).exec();
    //await this.managerModel.findOneAndUpdate({_id: employeeId}, { $push: { tasks: task._id }}).exec();
  }

  async findOneAndUpdate({managerId, reportId}): Promise<any> {
    return await this.managerModel.findOneAndUpdate({_id: managerId }, { $push: { reports: reportId }}).exec();
  }

  async findAll(): Promise<Manager[]> {
    return this.managerModel
    .find({})
    .populate('tasks')
    .populate('reports')
    .exec();
  }

  async findByName(name: string): Promise<Manager> {
    return this.managerModel.findOne({ name }).exec();
  }

  async findById(id: string): Promise<Manager> {
    return this.managerModel
      .findById({ _id: id })
      .populate('tasks')
      .populate('reports')
      .populate('manager', 'firstName lastName id')
      .populate('subordinates', 'firstName lastName id')
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.managerModel.deleteOne({ _id: id });
  }
}
