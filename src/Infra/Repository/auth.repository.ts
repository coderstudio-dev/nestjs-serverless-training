import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { SignUpDto } from 'src/App/dto/User/sign-up.dto';
import { Users } from '@prisma/client';
import { BaseRepository } from '../utils/base-repository';

@Injectable()
export class AuthRepository extends BaseRepository<Users> {
  constructor(private db: DatabaseService) {
    super(db.users);
  }

  async signUp(signUpDto: SignUpDto): Promise<Users> {
    return await this.create(signUpDto);
  }

  async findByUsername(username: string): Promise<Users> {
    return await this.findOne({ username });
  }

  async findByEmail(emailAddress: string): Promise<Users> {
    return await this.findOne({ emailAddress });
  }

  async findByEmailOrUsername(
    emailAddress: string,
    username: string,
  ): Promise<Users> {
    return await this.db.users.findFirst({
      where: {
        OR: [{ emailAddress }, { username }],
      },
    });
  }

  async findById(id: number): Promise<Users> {
    return await this.findOne({ id });
  }
}
