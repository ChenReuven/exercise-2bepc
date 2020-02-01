import { Document } from 'mongoose';

export interface Report extends Document {
  readonly text: string;
  readonly reportDate: Date;
}
