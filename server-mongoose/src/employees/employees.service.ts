import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './interface/employee.interface';
import { ReprotEmployeeToManagerDto } from './dto/report-employee-to-manager.dto';
import { ReportsService } from 'src/reports/reports.service';
import { text } from 'express';
import { ManagersService } from 'src/managers/managers.service';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
    private reportsService: ReportsService,
    private managersService: ManagersService,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeModel
      .find()
      .populate('tasks')
      .populate('manager', 'firstName lastName id')
      .exec();
  }

  async reportToManager(reprotEmployeeToManagerDto: ReprotEmployeeToManagerDto): Promise<any> {
    // tslint:disable-next-line: no-shadowed-variable
    const { text, reportDate, managerId, employeeId } = reprotEmployeeToManagerDto;
    const report = await this.reportsService.create({text, reportDate});
    const employeeUpdate = await this.employeeModel.findOneAndUpdate({_id: employeeId}, { $push: { reports: report._id }}).exec();
    const managerUpdate = await this.managersService.findOneAndUpdate({managerId, reportId: report._id });
  }

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdCat = new this.employeeModel(createEmployeeDto);
    return createdCat.save();
  }

  async findByName(name: string): Promise<Employee> {
    return this.employeeModel.findOne({ name }).exec();
  }

  async findById(id: string): Promise<Employee> {
    return this.employeeModel
      .findById({ _id: id })
      .populate('tasks')
      .populate('reports')
      .populate('manager', 'firstName lastName id')
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.employeeModel.deleteOne({ _id: id });
  }

  async assignTask({ employeeId, taskId}) {
    await this.employeeModel.findOneAndUpdate({_id: employeeId}, { $push: { tasks: taskId }}).exec();
  }
}
