import { Profiles } from '@prisma/client';
import { CreateProfileDto } from 'src/Interface/Controller/Profile/create-profile.dto';

export default interface Create {
  create(createProfileDto: CreateProfileDto): Promise<Profiles>;
}
