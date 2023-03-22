import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateArticleReactionDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  articleId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  appConstantId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  reactedBy: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  reactedAt: Date;
}
