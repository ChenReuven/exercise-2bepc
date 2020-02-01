import { Document } from 'mongoose';

export interface Task extends Document {
  readonly text: string;
  readonly assingDate: Date;
  readonly dueDate: Date;
}
