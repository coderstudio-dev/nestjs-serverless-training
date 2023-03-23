import { ProfileFollows } from '@prisma/client';

export default interface FindAll {
  findAll(): Promise<ProfileFollows[]>;
}
