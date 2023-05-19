import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from './employees.entity';
import { Repository } from 'typeorm';
import { DataEmployee } from './employees.dto';
import { Sector } from 'src/sector/sector.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employees)
    private employeesRepository: Repository<Employees>,
    @InjectRepository(Sector)
    private sectorRepository: Repository<Sector>,
  ) {}

  async getEmployees() {
    return await this.employeesRepository.find();
  }

  async insertEmployee(body: DataEmployee) {
    const { name, cpf, sector } = body;
    const sectors = await Promise.all(
      body.sector.map(async (sector: string) => {
        const existence = await this.sectorRepository.findOne({
          category: sector,
        });

        if (!existence) {
          return false;
        }
      }),
    );

    if (sectors.includes(false)) {
      throw new HttpException('Nem todos os setores existem', 404);
    } else {
      // const createEmployee = await this.employeesRepository.create({
      //   name,
      //   cpf,
      //   sector,
      // });
      // return await this.employeesRepository.save(createEmployee);
    }
  }

  async updateEmployee() {
    return '';
  }

  async removeEmployee() {
    return '';
  }
}
