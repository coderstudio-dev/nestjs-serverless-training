import { ArticleTags } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleTagsEntity implements ArticleTags {
  @ApiProperty()
  id: number;

  @ApiProperty()
  articleId: number;

  @ApiProperty()
  tagsId: number;

  @ApiProperty()
  createdAt: Date;
}
