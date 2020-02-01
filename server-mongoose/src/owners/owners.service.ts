import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Owner } from './interfaces/owner.interface';
import { CreateOwnerDto } from './dto/create-owner.dto';

@Injectable()
export class OwnersService {
  constructor(@InjectModel('Owner') private readonly ownerModel: Model<Owner>) {}

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const createdOwner = new this.ownerModel(createOwnerDto);
    return createdOwner.save();
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerModel.find({}).populate('ownerSupervisor', 'name age id').exec();
  }

  async findByName(name: string): Promise<Owner> {
    return this.ownerModel.findOne({name}).exec();
  }

  async findById(id: string): Promise<Owner> {
    return this.ownerModel.findById(id).exec();
  }

  async delete(id: string): Promise<any> {
    return this.ownerModel.deleteOne({_id: id});
  }
}
