// src/articles/dto/create-article.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional,
  IsString,
  IsEmail,
  IsDate,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  emailAddress: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  emailVerified: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  authToken: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  session: string;

  @IsOptional()
  @IsDate()
  @ApiPropertyOptional()
  sessionExpire: Date;

  @IsOptional()
  @IsDate()
  @ApiPropertyOptional()
  lastLogin: Date;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  isActive: boolean;
}
