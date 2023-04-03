import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateFollowDto } from 'src/App/dto/Follow/create-follow.dto';
import { UpdateFollowDto } from 'src/App/dto/Follow/update-follow.dto';

@Injectable()
export class FollowRepository {
  constructor(private db: DatabaseService) {}

  create(createFollowDto: CreateFollowDto) {
    return this.db.profileFollows.create({ data: createFollowDto });
  }

  findAll() {
    return this.db.profileFollows.findMany();
  }

  findOne(id: number) {
    return this.db.profileFollows.findUnique({ where: { id } });
  }

  update(id: number, updateFollowDto: UpdateFollowDto) {
    return this.db.profileFollows.update({
      where: { id },
      data: updateFollowDto,
    });
  }

  remove(id: number) {
    return this.db.profileFollows.delete({ where: { id } });
  }
}
