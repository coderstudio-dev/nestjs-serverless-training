import { ArticleTags } from '@prisma/client';

export default interface FindOne {
  findOne(id: number): Promise<ArticleTags>;
}
