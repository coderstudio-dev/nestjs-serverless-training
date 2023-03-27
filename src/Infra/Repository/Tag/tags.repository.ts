import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateTagDto } from 'src/App/dto/Tag/create-tag.dto';
import { UpdateTagDto } from 'src/App/dto/Tag/update-tag.dto';
import { TagRepoInterface } from 'src/Domain/Tag/tag.repo.interface';

@Injectable()
export class TagsRepository implements TagRepoInterface {
  constructor(private db: DatabaseService) {}

  create(createTagDto: CreateTagDto) {
    return this.db.tags.create({ data: createTagDto });
  }

  findAll() {
    return this.db.tags.findMany();
  }

  findOne(id: number) {
    return this.db.tags.findUnique({ where: { id } });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.db.tags.update({
      where: { id },
      data: updateTagDto,
    });
  }

  remove(id: number) {
    return this.db.tags.delete({ where: { id } });
  }
}
