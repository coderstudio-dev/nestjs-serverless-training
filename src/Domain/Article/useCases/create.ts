import { Articles } from '@prisma/client';
import { CreateArticleDto } from 'src/Interface/Controller/Article/create-article.dto';

export default interface Create {
  create(createArticleDto: CreateArticleDto): Promise<Articles>;
}
