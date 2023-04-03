import { Tags } from '@prisma/client';

export default interface FindByName {
  findByName(name: string): Promise<Tags>;
}
