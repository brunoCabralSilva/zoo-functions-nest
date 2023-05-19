import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animals } from './animals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animals])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
