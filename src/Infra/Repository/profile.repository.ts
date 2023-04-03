import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateProfileDto } from 'src/App/dto/Profile/create-profile.dto';
import { UpdateProfileDto } from 'src/App/dto/Profile/update-profile.dto';
import { Profiles } from '@prisma/client';

@Injectable()
export class ProfileRepository {
  constructor(private db: DatabaseService) {}

  create(createProfileDto: CreateProfileDto): Promise<Profiles> {
    return this.db.profiles.create({ data: createProfileDto });
  }

  update(id: number, updateProfileDto: UpdateProfileDto): Promise<Profiles> {
    return this.db.profiles.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  findOne(id: number): Promise<Profiles> {
    return this.db.profiles.findUnique({ where: { id } });
  }
}
