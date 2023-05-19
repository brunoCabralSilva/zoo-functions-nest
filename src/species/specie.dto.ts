import { IsNotEmpty, IsString, Length } from 'class-validator';

export class DataSpecie {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  scientificName: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  popularName: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
  alimentation: string;
}
