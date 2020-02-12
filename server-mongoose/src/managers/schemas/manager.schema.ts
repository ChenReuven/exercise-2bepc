import * as mongoose from 'mongoose';

export const ManagerSchema = new mongoose.Schema(
  {
    avatar: String,
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    subordinates: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}],
    reports: [{type: mongoose.Schema.Types.ObjectId, ref: 'Report'}],
    tasks: [{type: mongoose.Schema.Types.ObjectId , ref: 'Task'}],
    manager: {type: mongoose.Schema.Types.ObjectId, ref: 'Manager'},
  },
  { timestamps: true },
);
