import { Articles } from '@prisma/client';

export default interface FindDrafts {
  findDrafts(): Promise<Articles[]>;
}
