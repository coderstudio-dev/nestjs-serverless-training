import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateCommentDto } from 'src/App/dto/Comment/create-comment.dto';
import { UpdateCommentDto } from 'src/App/dto/Comment/update-comment.dto';
import { GetCommentByArticleDto } from 'src/App/dto/Comment/get-comment-by-article.dto';

import { Comments } from '@prisma/client';

@Injectable()
export class CommentRepository {
  constructor(private db: DatabaseService) {}

  create(createCommentDto: CreateCommentDto): Promise<Comments> {
    return this.db.comments.create({ data: createCommentDto });
  }

  findAll(): Promise<Comments[]> {
    return this.db.comments.findMany();
  }

  findByArticle(
    getCommentByArticleDto: GetCommentByArticleDto,
  ): Promise<Comments[]> {
    const {
      articleId,
      page: skip = 1,
      pageSize: take = 10,
    } = getCommentByArticleDto;
    return this.db.comments.findMany({
      skip: skip - 1,
      take,
      where: { articleId },
      orderBy: [
        {
          comment_reactions: {
            _count: 'desc',
          },
        },
        {
          createdAt: 'desc',
        },
      ],
    });
  }

  findOne(id: number): Promise<Comments> {
    return this.db.comments.findUnique({ where: { id } });
  }

  update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comments> {
    return this.db.comments.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  remove(id: number): Promise<Comments> {
    return this.db.comments.delete({ where: { id } });
  }
}
