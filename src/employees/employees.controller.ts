import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { DataEmployee } from './employees.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  async getEmployees() {
    return await this.employeesService.getEmployees();
  }

  @Post()
  async insertEmployee(@Body() body: DataEmployee) {
    return this.employeesService.insertEmployee(body);
  }

  @Patch()
  async updateEmployee() {
    return this.employeesService.updateEmployee();
  }

  @Delete()
  async removeEmployee() {
    return this.employeesService.removeEmployee();
  }
}
