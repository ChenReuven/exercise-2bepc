import { Document } from 'mongoose';

export interface Employee extends Document {
  readonly firstName: string;
  readonly lastName: number;
  readonly position: string;
}
