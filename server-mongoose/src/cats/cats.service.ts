import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find({}).populate('owner', 'name age id').exec();
  }

  async findByName(name: string): Promise<Cat> {
    return this.catModel.findOne({name}).exec();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async delete(id: string): Promise<any> {
    return this.catModel.deleteOne({_id: id});
  }
}
