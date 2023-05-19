import { Animals } from 'src/animals/animals.entity';
import { Employees } from 'src/employees/employees.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sector')
export class Sector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @ManyToMany(() => Employees, (employees: Employees) => employees.sector)
  employees: Employees[];

  @OneToMany(() => Animals, (animals) => animals.sector)
  animals: Animals[];
}
