import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerSchema } from './schemas/owner.schema';
import { OwnersController } from './owner.controller';
import { OwnersService } from './owners.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Owner', schema: OwnerSchema }])],
  controllers: [OwnersController],
  providers: [OwnersService],
})
export class OwnersModule {}
