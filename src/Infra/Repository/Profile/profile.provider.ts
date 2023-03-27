import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from 'src/App/dto/Profile/create-profile.dto';
import { UpdateProfileDto } from 'src/App/dto/Profile/update-profile.dto';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileProvider {
  constructor(private profileRepository: ProfileRepository) {}

  create(createProfileDto: CreateProfileDto) {
    return this.profileRepository.create(createProfileDto);
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepository.update(id, updateProfileDto);
  }

  findOne(id: number) {
    return this.profileRepository.findOne(id);
  }
}
