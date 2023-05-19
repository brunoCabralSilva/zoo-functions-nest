import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SectorService } from './sector.service';
import { DataSector } from './sector.dto';

@Controller('sector')
export class SectorController {
  constructor(private sectorService: SectorService) {}

  @Get()
  async getSectors() {
    return await this.sectorService.getSectors();
  }

  @Post()
  async insertSector(@Body() body: DataSector) {
    return this.sectorService.insertSector(body);
  }

  @Patch(':id')
  async updateSector(@Body() body: DataSector, @Param('id') id: string) {
    return this.sectorService.updateSector(id, body);
  }

  @Delete(':id')
  async removeSector(@Param('id') id: string) {
    return this.sectorService.removeSector(id);
  }
}
