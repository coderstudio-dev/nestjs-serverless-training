import { Articles } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ArticleEntity implements Articles {
  @ApiProperty()
  id: number;

  @ApiProperty()
  profileId: number;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional({ nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  coverBanner: string;

  @ApiProperty()
  status: string;

  @ApiPropertyOptional({ nullable: true })
  isPinned: boolean | null;

  @ApiPropertyOptional()
  draftBy: number;

  @ApiPropertyOptional()
  draftAt: Date;

  @ApiPropertyOptional()
  postedBy: number;

  @ApiPropertyOptional()
  postedAt: Date;

  @ApiProperty()
  createdBy: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedBy: number;

  @ApiProperty()
  updatedAt: Date;
}
