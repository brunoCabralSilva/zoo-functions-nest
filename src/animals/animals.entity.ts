import { Sector } from 'src/sector/sector.entity';
import { Species } from 'src/species/species.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('animals')
export class Animals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @JoinTable()
  @ManyToOne(() => Species, (species) => species.animals)
  specie: Species;

  @JoinTable()
  @ManyToOne(() => Sector, (sector) => sector.animals)
  sector: Sector;
}
