import { Users } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserEntity implements Users {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  emailAddress: string;

  @ApiPropertyOptional()
  emailVerified: boolean;

  @ApiProperty()
  password: string;

  @ApiPropertyOptional()
  authToken: string;

  @ApiPropertyOptional()
  session: string;

  @ApiPropertyOptional()
  sessionExpire: Date;

  @ApiPropertyOptional()
  lastLogin: Date;

  @ApiPropertyOptional()
  isActive: boolean;
}
