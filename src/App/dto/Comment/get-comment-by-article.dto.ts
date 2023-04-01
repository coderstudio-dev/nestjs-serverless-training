// src/articles/dto/create-article.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsInt, Min } from 'class-validator';

export class GetCommentByArticleDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  articleId: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @ApiPropertyOptional()
  page: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @ApiPropertyOptional()
  pageSize: number;
}
