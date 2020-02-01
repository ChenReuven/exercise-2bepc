import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './interfaces/owner.interface';

@Controller('owners')
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  @Post()
  async create(@Body() createOwnerDto: CreateOwnerDto) {
    await this.ownersService.create(createOwnerDto);
  }

  @Get()
  async findAll(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }

  @Get('/by-name/:name')
  async findByName(@Param('name') name: string): Promise<Owner> {
    return this.ownersService.findByName(name);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Owner> {
    return this.ownersService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Owner> {
    return this.ownersService.delete(id);
  }
}
