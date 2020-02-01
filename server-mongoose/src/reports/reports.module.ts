import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsService } from 'src/reports/reports.service';
import { ReportSchema } from './schemas/report.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Report', schema: ReportSchema }])],
  providers: [ReportsService],
})
export class ReportsModule {}
