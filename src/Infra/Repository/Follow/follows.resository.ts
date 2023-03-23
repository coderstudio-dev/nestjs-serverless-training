import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateFollowDto } from 'src/Interface/Controller/Follow/create-follow.dto';
import { UpdateFollowDto } from 'src/Interface/Controller/Follow/update-follow.dto';
import { FollowRepoInterface } from 'src/Domain/Follow/follow.repo.interface';

@Injectable()
export class FollowRepository implements FollowRepoInterface {
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
