import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateArticleDto } from 'src/Interface/Controller/Article/create-article.dto';
import { UpdateArticleDto } from 'src/Interface/Controller/Article/update-article.dto';
import { ArticleRepoInterface } from 'src/Domain/Article/article.repo.interface';

@Injectable()
export class ArticleRepository implements ArticleRepoInterface {
  constructor(private db: DatabaseService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.db.article.create({ data: createArticleDto });
  }

  findDrafts() {
    return this.db.article.findMany({ where: { published: false } });
  }

  findAll() {
    return this.db.article.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this.db.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.db.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.db.article.delete({ where: { id } });
  }
}
