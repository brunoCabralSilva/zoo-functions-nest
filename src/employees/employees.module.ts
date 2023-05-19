import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from './employees.entity';
import { Sector } from 'src/sector/sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employees, Sector])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
