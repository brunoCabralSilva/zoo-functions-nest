import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class DataAnimal {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  age: number;

  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  sector: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  specie: string;
}
