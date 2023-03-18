// src/articles/dto/create-article.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsInt,
} from 'class-validator';

export class CreateArticleDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  profileId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiPropertyOptional({ nullable: true })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  coverBanner: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ nullable: true })
  isPinned = false;

  @IsOptional()
  @ApiPropertyOptional()
  draftBy: number;

  @IsOptional()
  @ApiPropertyOptional()
  draftAt: Date;

  @IsOptional()
  @ApiPropertyOptional()
  postedBy: number;

  @IsOptional()
  @ApiPropertyOptional()
  postedAt: Date;

  @ApiProperty()
  createdBy: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedBy: number;

  @ApiProperty()
  updatedAt: Date;
}
