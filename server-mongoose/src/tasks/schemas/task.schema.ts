import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
  {
    text: String,
    assingDate: { type: Date, default: Date.now },
    dueDate: Date,
  },
  { timestamps: true },
);
