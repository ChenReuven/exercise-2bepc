import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { Manager } from './interface/manager.interface';
import { ManagersService } from './managers.service';
import { ReportToManagerDto } from './dto/report-to-manager.dto';
import { AssignTaskDto } from './dto/assign-task.dto';

@Controller('managers')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Post()
  async create(@Body() createManagerDto: CreateManagerDto) {
    await this.managersService.create(createManagerDto);
  }

  @Get()
  async findAll(): Promise<Manager[]> {
    return this.managersService.findAll();
  }

  @Post('/report')
  async reportToManager(@Body() reportToManagerDto: ReportToManagerDto) {
    await this.managersService.reportToManager(reportToManagerDto);
  }

  @Post('/assign-task')
  async assignTask(@Body() assignTaskDto: AssignTaskDto) {
    await this.managersService.assignTask(assignTaskDto);
  }

  @Get('/by-name/:name')
  async findByName(@Param('name') name: string): Promise<Manager> {
    return this.managersService.findByName(name);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Manager> {
    return this.managersService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Manager> {
    return this.managersService.delete(id);
  }
}
