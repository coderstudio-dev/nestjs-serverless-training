import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateArticleReactionDto } from 'src/Interface/Controller/ArticleReaction/create-article-reaction.dto';
import { UpdateArticleReactionDto } from 'src/Interface/Controller/ArticleReaction/update-article-reaction.dto';
import { ArticleReactionRepoInterface } from 'src/Domain/ArticleReaction/article-reactions.repo.interface';

@Injectable()
export class ArticleReactionRepository implements ArticleReactionRepoInterface {
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
