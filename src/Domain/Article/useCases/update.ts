import { Articles } from '@prisma/client';
import { UpdateArticleDto } from 'src/App/dto/Article/update-article.dto';

export default interface Update {
  update(id: number, updateArticleDto: UpdateArticleDto): Promise<Articles>;
}
