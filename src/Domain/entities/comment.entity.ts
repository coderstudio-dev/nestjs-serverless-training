import { Comments } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CommentEntity implements Comments {
  @ApiProperty()
  id: number;

  @ApiProperty()
  articleId: number;

  @ApiPropertyOptional()
  childId: number;

  @ApiPropertyOptional()
  parentId: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdBy: number;

  @ApiPropertyOptional()
  createdAt: Date;

  @ApiPropertyOptional()
  updatedAt: Date;
}
