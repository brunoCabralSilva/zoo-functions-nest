import { Animals } from 'src/animals/animals.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('species')
export class Species {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  scientificName: string;

  @Column()
  popularName: string;

  @Column()
  alimentation: string;

  @OneToMany(() => Animals, (animals) => animals.specie)
  animals: Animals[];
}
