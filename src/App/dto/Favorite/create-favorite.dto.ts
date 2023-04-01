import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateFavoriteDto {
  @IsInt()
  @ApiProperty()
  profileId: number;

  @IsInt()
  @ApiProperty()
  articleId: number;
}
