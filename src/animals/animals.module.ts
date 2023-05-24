import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animals } from './animals.entity';
import { Sector } from 'src/sector/sector.entity';
import { Species } from 'src/species/species.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animals, Sector, Species])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
