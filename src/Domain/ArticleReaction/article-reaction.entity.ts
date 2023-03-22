import { ArticleReactions } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ArticleReactionsEntity implements ArticleReactions {
  @ApiProperty()
  id: number;

  @ApiProperty()
  articleId: number;

  @ApiProperty()
  appConstantId: number;

  @ApiProperty()
  reactedBy: number;

  @ApiProperty()
  reactedAt: Date;
}
