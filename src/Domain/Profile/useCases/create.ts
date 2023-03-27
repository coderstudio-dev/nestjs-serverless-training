import { Profiles } from '@prisma/client';
import { CreateProfileDto } from 'src/App/dto/Profile/create-profile.dto';

export default interface Create {
  create(createProfileDto: CreateProfileDto): Promise<Profiles>;
}
