import { ProfileRepositories } from '@prisma/client';
import { CreateProfileRepositoriesDto } from 'src/Interface/Controller/Profile/create-profile-repositories.dto';

export default interface Create {
  create(
    createProfileRepositoriesDto: CreateProfileRepositoriesDto,
  ): Promise<ProfileRepositories>;
}
