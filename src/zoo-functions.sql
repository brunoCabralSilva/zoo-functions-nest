SET NAMES utf8mb4;

DROP SCHEMA IF EXISTS zoo-functions;
CREATE SCHEMA zoo-functions;
USE zoo-functions;

CREATE TABLE species (
  species_id INT PRIMARY KEY AUTO_INCREMENT,
  species_popular_name varchar(15) NOT NULL,
  species_scientific_name varchar(40) NOT NULL,
  species_alimentation varchar(15) NOT NULL
) engine = InnoDB;

CREATE TABLE sectors (
  sectors_id INT PRIMARY KEY AUTO_INCREMENT,
  sectors_name varchar(15) NOT NULL
) engine == InnoDB;

CREATE TABLE animals (
  animals_id INT PRIMARY KEY AUTO_INCREMENT,
  animals_name varchar(15) NOT NULL,
  animals_age INT NOT NULL,
  CONSTRAINT FOREIGN KEY (animals_specie) REFERENCES species (specie_id),
  CONSTRAINT FOREIGN KEY (animals_sector) REFERENCES sectors (sectors_id)
) engine = InnoDB;
