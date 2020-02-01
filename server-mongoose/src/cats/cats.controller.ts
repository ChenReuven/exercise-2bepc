import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/by-name/:name')
  async findByName(@Param('name') name: string): Promise<Cat> {
    return this.catsService.findByName(name);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Cat> {
    return this.catsService.delete(id);
  }
}
