import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema(
  {
    text: String,
    reportDate: Date,
  },
  { timestamps: true },
);
