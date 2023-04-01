import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { CreateUserDto } from 'src/App/dto/User/create-user.dto';
import { UpdateUserDto } from 'src/App/dto/User/update-user.dto';
import { Users } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private db: DatabaseService) {}

  create(createUserDto: CreateUserDto): Promise<Users> {
    return this.db.users.create({ data: createUserDto });
  }

  update(id: number, updateProfileDto: UpdateUserDto): Promise<Users> {
    return this.db.users.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  findOne(id: number): Promise<Users> {
    return this.db.users.findUnique({ where: { id } });
  }

  remove(id: number): Promise<Users> {
    return this.db.users.delete({ where: { id } });
  }
}
