import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateArticleTagDto } from 'src/App/dto/ArticleTag/create-article-tag.dto';
import { UpdateArticleTagDto } from 'src/App/dto/ArticleTag/update-article-tag.dto';

@Injectable()
export class ArticleTagsRepository {
  constructor(private db: DatabaseService) {}

  create(createArticleTagDto: CreateArticleTagDto) {
    return this.db.articleTags.create({ data: createArticleTagDto });
  }

  findAll() {
    return this.db.articleTags.findMany();
  }

  findByArticleId(articleId: number) {
    return this.db.articleTags.findMany({ where: { articleId } });
  }

  findByTagId(tagsId: number) {
    return this.db.articleTags.findMany({ where: { tagsId } });
  }

  findByArticleIdAndTagId({ articleId, tagsId }) {
    return this.db.articleTags.findMany({ where: { articleId, tagsId } });
  }

  findOne(id: number) {
    return this.db.articleTags.findUnique({ where: { id } });
  }

  update(id: number, updateArticleTagDto: UpdateArticleTagDto) {
    return this.db.articleTags.update({
      where: { id },
      data: updateArticleTagDto,
    });
  }

  remove(id: number) {
    return this.db.articleTags.delete({ where: { id } });
  }
}
