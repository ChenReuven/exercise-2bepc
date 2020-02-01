import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './interface/employee.interface';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { ReprotEmployeeToManagerDto } from './dto/report-employee-to-manager.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Post('/report')
  async reportToManager(@Body() reprotEmployeeToManagerDto: ReprotEmployeeToManagerDto) {
    await this.employeesService.reportToManager(reprotEmployeeToManagerDto);
  }

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    await this.employeesService.create(createEmployeeDto);
  }

  @Get('/by-name/:name')
  async findByName(@Param('name') name: string): Promise<Employee> {
    return this.employeesService.findByName(name);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Employee> {
    return this.employeesService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cat> {
    return this.employeesService.delete(id);
  }
}
