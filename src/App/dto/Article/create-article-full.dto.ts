// src/articles/dto/create-article.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsInt,
} from 'class-validator';

export class CreateArticleFullDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  profileId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  slug: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiPropertyOptional({ nullable: true })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  bodyHtml: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional()
  coverBanner: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsString()
  @ApiPropertyOptional()
  articleTags: string;
}
