import { Injectable } from '@nestjs/common';
import { CreateProfileRepositoriesDto } from 'src/App/dto/ProfileRepository/create-profile-repositories.dto';
import { UpdateProfileRepositoriesDto } from 'src/App/dto/ProfileRepository/update-profile-repositories.dto';
import { ProfileRepository } from './profile-repositories.repository';

@Injectable()
export class ProfileProvider {
  constructor(private profileRepository: ProfileRepository) {}

  create(createProfileRepositoriesDto: CreateProfileRepositoriesDto) {
    return this.profileRepository.create(createProfileRepositoriesDto);
  }

  update(
    id: number,
    updateProfileRepositoriesDto: UpdateProfileRepositoriesDto,
  ) {
    return this.profileRepository.update(id, updateProfileRepositoriesDto);
  }

  findByProfileId(id: number) {
    return this.profileRepository.findByProfileId(id);
  }
}
