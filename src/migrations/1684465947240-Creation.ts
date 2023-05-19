import { MigrationInterface, QueryRunner } from 'typeorm';

export class Creation1684465947240 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE species (
      species_id INT PRIMARY KEY,
      species_popular_name varchar(15) NOT NULL,
      species_scientific_name varchar(40) NOT NULL,
      species_alimentation varchar(15) NOT NULL
    )`);
    await queryRunner.query(`sectors_id INT PRIMARY KEY,
    sectors_name varchar(15) NOT NULL`);
    await queryRunner.query(`CREATE TABLE animals (
      animals_id INT PRIMARY KEY,
      animals_name varchar(15) NOT NULL,
      animals_age INT NOT NULL,
      CONSTRAINT FOREIGN KEY (animals_specie) REFERENCES species (specie_id),
      CONSTRAINT FOREIGN KEY (animals_sector) REFERENCES sectors (sectors_id)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SCHEMA zoo-functions`);
  }
}
