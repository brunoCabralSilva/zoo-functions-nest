import { Module } from '@nestjs/common';
import { SectorController } from './sector.controller';
import { SectorService } from './sector.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sector } from './sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sector])],
  controllers: [SectorController],
  providers: [SectorService],
})
export class SectorModule {}
