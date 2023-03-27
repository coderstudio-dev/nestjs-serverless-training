import { ProfileRepositories } from '@prisma/client';

export default interface FindByProfileId {
  findByProfileId(profileId: number): Promise<ProfileRepositories[]>;
}
