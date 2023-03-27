import { ProfileRepositories } from '@prisma/client';
import { CreateProfileRepositoriesDto } from 'src/App/dto/ProfileRepository/create-profile-repositories.dto';

export default interface Create {
  create(
    createProfileRepositoriesDto: CreateProfileRepositoriesDto,
  ): Promise<ProfileRepositories>;
}
