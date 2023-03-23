import { ApiProperty } from '@nestjs/swagger';

export class CreateFollowDto {
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
