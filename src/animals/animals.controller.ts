import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get()
  async getAnimals() {
    return await this.animalsService.getAnimals();
  }

  @Post('insert')
  async insertAnimal() {
    return this.animalsService.insertAnimal();
  }

  @Patch('update')
  async updateAnimal() {
    return this.animalsService.updateAnimal();
  }

  @Delete('remove')
  async removeAnimal() {
    return this.animalsService.removeAnimal();
  }
}
