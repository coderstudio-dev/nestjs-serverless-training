// src/articles/dto/create-article.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  articleId: number;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional()
  parentId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  createdBy: number;
}
