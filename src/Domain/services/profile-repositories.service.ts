import { Injectable } from '@nestjs/common';
import { CreateProfileRepositoriesDto } from 'src/App/dto/ProfileRepository/create-profile-repositories.dto';
import { UpdateProfileRepositoriesDto } from 'src/App/dto/ProfileRepository/update-profile-repositories.dto';
import { ProfileRepositoriesRepository } from 'src/Infra/Repository/profile-repositories.repository';

@Injectable()
export class ProfileRepositoriesService {
  constructor(
    private profileRepositoriesRepository: ProfileRepositoriesRepository,
  ) {}

  create(createProfileRepositoriesDto: CreateProfileRepositoriesDto) {
    return this.profileRepositoriesRepository.create(
      createProfileRepositoriesDto,
    );
  }

  update(
    id: number,
    updateProfileRepositoriesDto: UpdateProfileRepositoriesDto,
  ) {
    return this.profileRepositoriesRepository.update(
      id,
      updateProfileRepositoriesDto,
    );
  }

  findByProfileId(id: number) {
    return this.profileRepositoriesRepository.findByProfileId(id);
  }
}
