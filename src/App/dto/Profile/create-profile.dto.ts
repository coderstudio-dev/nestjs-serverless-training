// src/articles/dto/create-article.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  middleName: string;

  @IsString()
  @ApiProperty()
  displayName: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  about: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  skillLanguages: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  work: string;

  @IsString()
  @ApiProperty()
  emailAddress: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  stateProvinceCity: string;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional()
  countryId: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  currentLearning: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  currentHacking: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  availableFor: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  photo: string;
}
