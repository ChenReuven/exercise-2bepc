import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Report } from './interface/report.interface';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectModel('Report') private readonly reportModel: Model<Report>) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const createdReport = new this.reportModel(createReportDto);
    return createdReport.save();
  }

}
