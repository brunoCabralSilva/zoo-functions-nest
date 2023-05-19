import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from './sector.entity';
import { Repository } from 'typeorm';
import { DataSector } from './sector.dto';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  async getSectors() {
    return await this.sectorRepository.find();
  }

  async insertSector(body: DataSector) {
    const { category } = body;
    const query = await this.sectorRepository.find({
      where: { category },
    });

    if (query.length !== 0) {
      throw new HttpException('Setor já existente', 400);
    } else {
      return await this.sectorRepository.save(body);
    }
  }

  async updateSector(id: string, body: DataSector) {
    const { category } = body;
    const query = await this.sectorRepository.find({
      where: { id: Number(id) },
    });

    if (query.length === 0) {
      throw new HttpException('Setor não encontrado', 400);
    } else {
      const upSpecie = await this.sectorRepository.preload({
        id: +id,
        category,
      });
      return await this.sectorRepository.save(upSpecie);
    }
  }

  async removeSector(id: string) {
    const query = await this.sectorRepository.find({
      where: { id: Number(id) },
    });
    if (query.length === 0) {
      throw new HttpException('Setor não encontrada', 400);
    } else {
      return await this.sectorRepository.remove(query);
    }
  }
}
