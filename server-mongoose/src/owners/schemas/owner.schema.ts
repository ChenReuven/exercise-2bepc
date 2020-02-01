import * as mongoose from 'mongoose';

export const OwnerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: Number,
  ownerSupervisor: {type:  mongoose.Schema.Types.ObjectId, ref: 'Owner'},
}, { timestamps: true });
