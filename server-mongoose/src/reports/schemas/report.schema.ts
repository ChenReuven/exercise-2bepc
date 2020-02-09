import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema(
  {
    text: String,
    date: Date,
  },
  { timestamps: true },
);
