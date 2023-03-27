import { PartialType } from '@nestjs/swagger';
import { CreateProfileRepositoriesDto } from './create-profile-repositories.dto';

export class UpdateProfileRepositoriesDto extends PartialType(
  CreateProfileRepositoriesDto,
) {}
