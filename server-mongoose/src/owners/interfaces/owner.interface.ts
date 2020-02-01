import { Document } from 'mongoose';

export interface Owner extends Document {
  readonly name: string;
  readonly age: number;
  readonly ownerSupervisor: string;
}
