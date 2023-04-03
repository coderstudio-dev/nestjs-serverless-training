import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateArticleDto } from 'src/App/dto/Article/create-article.dto';
import { UpdateArticleDto } from 'src/App/dto/Article/update-article.dto';
import { ArticleRepoInterface } from 'src/Domain/Article/article.repo.interface';

@Injectable()
export class ArticleRepository implements ArticleRepoInterface {
  constructor(private db: DatabaseService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.db.articles.create({ data: createArticleDto });
  }

  findDrafts() {
    return this.db.articles.findMany({ where: { status: 'draft' } });
  }

  findAll() {
    return this.db.articles.findMany({ where: { status: 'posted' } });
  }

  findOne(id: number) {
    return this.db.articles.findUnique({ where: { id } });
  }
  findManyWithTags(id: number) {
    return this.db.articles.findMany({
      where: { id },
      include: {
        article_tags: {
          include: { tags: { select: { id: true, name: true } } },
        },
      },
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.db.articles.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.db.articles.delete({ where: { id } });
  }
}
