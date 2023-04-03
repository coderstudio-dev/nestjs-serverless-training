import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Infra/Database/database.service';
import { SignUpDto } from 'src/App/dto/User/sign-up.dto';
import { UpdateUserDto } from 'src/App/dto/User/update-user.dto';
import { Users } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private db: DatabaseService) {}

  create(signUpDto: SignUpDto): Promise<Users> {
    delete signUpDto.confirmPassword;

    const data = {
      ...signUpDto,
      emailVerified: false,
      authToken: '',
      session: ',',
      sessionExpire: '',
      lastLogin: '',
      isActive: false,
    };
    return this.db.users.create({ data });
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

  findByEmail(emailAddress: string): Promise<Users> {
    return this.db.users.findUnique({ where: { emailAddress } });
  }

  remove(id: number): Promise<Users> {
    return this.db.users.delete({ where: { id } });
  }
}
