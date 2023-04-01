import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/App/dto/User/create-user.dto';
import { UpdateUserDto } from 'src/App/dto/User/update-user.dto';
import { UserRepository } from '../../Infra/Repository/user.repository';
import { Users } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(createProfileDto: CreateUserDto): Promise<Users> {
    return this.userRepository.create(createProfileDto);
  }

  update(id: number, updateProfileDto: UpdateUserDto): Promise<Users> {
    return this.userRepository.update(id, updateProfileDto);
  }

  findOne(id: number): Promise<Users> {
    return this.userRepository.findOne(id);
  }

  remove(id: number): Promise<Users> {
    return this.userRepository.remove(id);
  }
}
