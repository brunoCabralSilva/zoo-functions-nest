import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { SpeciesModule } from './species/species.module';
import { SectorModule } from './sector/sector.module';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const connection = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  autoloadEntities: true,
  synchronize: true,
};

@Module({
  imports: [
    AnimalsModule,
    SpeciesModule,
    SectorModule,
    EmployeesModule,
    TypeOrmModule.forRoot(connection),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
