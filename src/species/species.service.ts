import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Species } from './species.entity';
import { DataSpecie } from './specie.dto';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private speciesRepository: Repository<Species>,
  ) {}

  async getSpecies() {
    return await this.speciesRepository.find();
  }

  async insertSpecie(body: DataSpecie) {
    const { scientificName } = body;
    const query = await this.speciesRepository.find({
      where: { scientificName },
    });

    if (query.length !== 0) {
      throw new HttpException('Espécie já existente', 400);
    } else {
      return await this.speciesRepository.save(body);
    }
  }

  async updateSpecie(id: string, body: DataSpecie) {
    const { scientificName, popularName, alimentation } = body;
    const query = await this.speciesRepository.find({
      where: { id: Number(id) },
    });

    if (query.length === 0) {
      throw new HttpException('Espécie não encontrada', 400);
    } else {
      const upSpecie = await this.speciesRepository.preload({
        id: +id,
        scientificName,
        popularName,
        alimentation,
      });
      return await this.speciesRepository.save(upSpecie);
    }
  }

  async removeSpecie(id: string) {
    const query = await this.speciesRepository.find({
      where: { id: Number(id) },
    });
    if (query.length === 0) {
      throw new HttpException('Espécie não encontrada', 400);
    } else {
      return await this.speciesRepository.remove(query);
    }
  }
}
