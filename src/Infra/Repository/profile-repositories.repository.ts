import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateProfileRepositoriesDto } from 'src/App/dto/ProfileRepository/create-profile-repositories.dto';
import { UpdateProfileRepositoriesDto } from 'src/App/dto/ProfileRepository/update-profile-repositories.dto';
import { ProfileRepositories } from '@prisma/client';

@Injectable()
export class ProfileRepositoriesRepository {
  constructor(private db: DatabaseService) {}

  findByProfileId(profileId: number): Promise<ProfileRepositories[]> {
    return this.db.profileRepositories.findMany({ where: { profileId } });
  }

  create(
    createProfileRepositoriesDto: CreateProfileRepositoriesDto,
  ): Promise<ProfileRepositories> {
    return this.db.profileRepositories.create({
      data: createProfileRepositoriesDto,
    });
  }

  update(
    id: number,
    updateProfileRepositoriesDto: UpdateProfileRepositoriesDto,
  ): Promise<ProfileRepositories> {
    return this.db.profileRepositories.update({
      where: { id },
      data: updateProfileRepositoriesDto,
    });
  }
}
