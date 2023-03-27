import { Articles } from '@prisma/client';
import { CreateArticleDto } from 'src/App/dto/Article/create-article.dto';

export default interface Create {
  create(createArticleDto: CreateArticleDto): Promise<Articles>;
}
