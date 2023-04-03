import { ArticleTags } from '@prisma/client';
import { CreateArticleTagDto } from 'src/App/dto/ArticleTag/create-article-tag.dto';

export default interface Create {
  create(createArticleTagDto: CreateArticleTagDto): Promise<ArticleTags>;
}
