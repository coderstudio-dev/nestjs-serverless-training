import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleTagDto {
  @ApiProperty()
  articleId: number;

  @ApiProperty()
  tagsId: number;

  @ApiProperty()
  createdAt: Date;
}
