import { Document } from 'mongoose';

export interface Manager extends Document {
  readonly avatar: string;
  readonly firstName: string;
  readonly lastName: number;
}
