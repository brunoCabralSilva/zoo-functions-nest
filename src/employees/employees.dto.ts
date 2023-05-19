import { IsArray, IsNotEmpty, IsString, Length } from 'class-validator';

export class DataEmployee {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(11)
  cpf: string;

  @IsArray()
  @IsNotEmpty()
  sector: string[];
}
