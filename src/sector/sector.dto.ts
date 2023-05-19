import { IsNotEmpty, IsString, Length } from 'class-validator';

export class DataSector {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  category: string;
}
