import { Document } from 'mongoose';

export interface Employee extends Document {
  readonly avatar: string;
  readonly firstName: string;
  readonly lastName: number;
  readonly position: string;
}
