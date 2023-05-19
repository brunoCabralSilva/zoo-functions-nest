import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SpeciesService } from './species.service';
import { DataSpecie } from './specie.dto';

@Controller('species')
export class SpeciesController {
  constructor(private speciesService: SpeciesService) {}

  @Get()
  async getSpecies() {
    return await this.speciesService.getSpecies();
  }

  @Post()
  async insertSpecie(@Body() insertSpecie: DataSpecie) {
    return this.speciesService.insertSpecie(insertSpecie);
  }

  @Patch(':id')
  async updateSpecie(
    @Body() updateSpecie: DataSpecie,
    @Param('id') id: string,
  ) {
    return this.speciesService.updateSpecie(id, updateSpecie);
  }

  @Delete(':id')
  async removeSpecie(@Param('id') id: string) {
    return this.speciesService.removeSpecie(id);
  }
}
