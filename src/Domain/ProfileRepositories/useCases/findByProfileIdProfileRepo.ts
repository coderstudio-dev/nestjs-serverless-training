import { ProfileRepositories } from '@prisma/client';

export default interface FindByProfileIdProfileRepo {
  findOne(profileId: number): Promise<ProfileRepositories>;
}
