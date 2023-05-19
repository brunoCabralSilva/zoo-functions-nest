import { Sector } from 'src/sector/sector.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employees')
export class Employees {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @JoinTable()
  @ManyToMany(() => Sector, (sector: Sector) => sector.employees)
  sector: Sector[];
}
