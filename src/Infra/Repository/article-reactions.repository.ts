import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateArticleReactionDto } from 'src/App/dto/ArticleReaction/create-article-reaction.dto';
import { UpdateArticleReactionDto } from 'src/App/dto/ArticleReaction/update-article-reaction.dto';

@Injectable()
export class ArticleReactionRepository {
  constructor(private db: DatabaseService) {}

  create(createArticleReactionDto: CreateArticleReactionDto) {
    return this.db.articleReactions.create({ data: createArticleReactionDto });
  }

  findAll() {
    return this.db.articleReactions.findMany();
  }

  findOne(id: number) {
    return this.db.articleReactions.findUnique({ where: { id } });
  }

  update(id: number, updateArticleReactionDto: UpdateArticleReactionDto) {
    return this.db.articleReactions.update({
      where: { id },
      data: updateArticleReactionDto,
    });
  }

  remove(id: number) {
    return this.db.articleReactions.delete({ where: { id } });
  }
}