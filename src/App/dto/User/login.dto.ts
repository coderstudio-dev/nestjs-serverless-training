// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty()
  emailAddress: string;

  @IsString()
  @ApiProperty()
  password: string;
}
