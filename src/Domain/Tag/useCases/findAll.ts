import { Tags } from '@prisma/client';

export default interface FindAll {
  findAll(): Promise<Tags[]>;
}
