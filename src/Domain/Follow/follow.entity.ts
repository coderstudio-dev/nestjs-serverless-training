import { ProfileFollows } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Follow implements ProfileFollows {
  @ApiProperty()
  id: number;

  @ApiProperty()
  profileId: number;

  @ApiProperty()
  following: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  createdBy: number;
}
