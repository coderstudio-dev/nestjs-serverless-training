import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;
}
