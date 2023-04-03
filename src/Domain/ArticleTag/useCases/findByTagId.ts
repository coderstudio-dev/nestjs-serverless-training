import { ArticleTags } from '@prisma/client';

export default interface FindByTagId {
  findByTagId(tagsId: number): Promise<ArticleTags[]>;
}
