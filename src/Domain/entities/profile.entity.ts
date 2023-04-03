import { Profiles } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProfileEntity implements Profiles {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiPropertyOptional()
  middleName: string;

  @ApiProperty()
  displayName: string;

  @ApiPropertyOptional()
  about: string;

  @ApiPropertyOptional()
  skillLanguages: string;

  @ApiPropertyOptional()
  work: string;

  @ApiProperty()
  emailAddress: string;

  @ApiPropertyOptional()
  stateProvinceCity: string;

  @ApiPropertyOptional()
  countryId: number;

  @ApiPropertyOptional()
  currentLearning: string;

  @ApiPropertyOptional()
  currentHacking: string;

  @ApiPropertyOptional()
  availableFor: string;

  @ApiPropertyOptional()
  photo: string;
}
