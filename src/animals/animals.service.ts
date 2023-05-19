import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Animals } from './animals.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animals)
    private animalRepository: Repository<Animals>,
  ) {}

  async getAnimals() {
    return this.animalRepository.find();
  }

  async insertAnimal() {
    return '';
  }

  async updateAnimal() {
    return '';
  }

  async removeAnimal() {
    return '';
  }
}
