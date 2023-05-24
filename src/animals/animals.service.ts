import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Animals } from './animals.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/sector/sector.entity';
import { Species } from 'src/species/species.entity';
import { DataAnimal } from './animals.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animals)
    private animalRepository: Repository<Animals>,
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
    @InjectRepository(Species)
    private speciesRepository: Repository<Species>,
  ) {}

  async getAnimals() {
    return this.animalRepository.find();
  }

  async insertAnimal(body: DataAnimal) {
    const { age, name, sector, specie } = body;
    const querySector = await this.sectorRepository.find({
      where: { category: sector },
    });
    const querySpecie = await this.speciesRepository.find({
      where: { scientificName: specie },
    });
    const queryName = await this.animalRepository.find({
      where: { name },
    });
    if (querySector.length === 0) {
      throw new HttpException('Setor não encontrado', 400);
    } else if (querySpecie.length === 0) {
      throw new HttpException('Espécie não encontrada', 400);
    } else if (queryName.length !== 0) {
      throw new HttpException('Nome de animal já existe.', 400);
    } else {
      // return { querySector, querySpecie };
      // const saveAnimal = await this.animalRepository.save({
      //   id: 2,
      //   name,
      //   age,
      //   sector: querySector,
      //   specie: querySpecie,
      // });
      // return saveAnimal;
    }
  }

  async updateAnimal() {
    return '';
  }

  async removeAnimal() {
    return '';
  }
}
