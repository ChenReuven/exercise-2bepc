import { Document } from 'mongoose';

export interface Manager extends Document {
  readonly firstName: string;
  readonly lastName: number;
}
