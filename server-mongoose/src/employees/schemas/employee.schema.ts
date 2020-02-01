import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    position: String,
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager' },
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  },
  { timestamps: true },
);
