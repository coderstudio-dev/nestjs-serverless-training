// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ProfileRepositories } from '@prisma/client';

export class ProfileRepositoriesEntity implements ProfileRepositories {
  @ApiProperty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  profileId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  repoLink: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  appConstantId: number;

  @ApiProperty()
  createdAt: Date;

  @IsInt()
  @ApiProperty()
  createdBy: number;
}
