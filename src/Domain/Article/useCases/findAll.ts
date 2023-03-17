import { Articles } from '@prisma/client';

export default interface FindAll {
  findAll(): Promise<Articles[]>;
}
