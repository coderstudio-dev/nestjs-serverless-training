import { Articles } from '@prisma/client';

export default interface FindManyWithTags {
  findManyWithTags(id: number): Promise<Articles[]>;
}
