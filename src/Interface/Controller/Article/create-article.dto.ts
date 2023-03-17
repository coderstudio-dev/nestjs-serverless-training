// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ required: false })
  description?: string;

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
  @ApiProperty()
  isPinned?: boolean = false;

  @IsOptional()
  @ApiProperty()
  draftBy?: number;

  @IsOptional()
  @ApiProperty()
  draftAt?: Date;

  @IsOptional()
  @ApiProperty()
  postedBy?: number;

  @IsOptional()
  @ApiProperty()
  postedAt?: Date;

  @IsOptional()
  @ApiProperty()
  createdBy?: number;

  @IsOptional()
  @ApiProperty()
  createdAt?: Date;

  @IsOptional()
  @ApiProperty()
  updatedBy?: number;

  @IsOptional()
  @ApiProperty()
  updatedAt?: Date;
}
