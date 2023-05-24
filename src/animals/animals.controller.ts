import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { DataAnimal } from './animals.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get()
  async getAnimals() {
    return await this.animalsService.getAnimals();
  }

  @Post()
  async insertAnimal(@Body() body: DataAnimal) {
    return this.animalsService.insertAnimal(body);
  }

  @Patch()
  async updateAnimal(@Body() body: DataAnimal, @Param('id') id: string) {
    return this.animalsService.updateAnimal();
  }

  @Delete()
  async removeAnimal(@Body() body: DataAnimal, @Param('id') id: string) {
    return this.animalsService.removeAnimal();
  }
}
