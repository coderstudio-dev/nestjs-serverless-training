import { Tags } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TagsEntity implements Tags {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  tagCount: number;
}
