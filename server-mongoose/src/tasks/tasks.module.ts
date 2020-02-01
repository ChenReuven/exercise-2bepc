import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from 'src/tasks/tasks.service';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  providers: [TasksService],
})
export class TasksModule {}
