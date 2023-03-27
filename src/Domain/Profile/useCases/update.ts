import { Profiles } from '@prisma/client';
import { UpdateProfileDto } from 'src/App/dto/Profile/update-profile.dto';

export default interface Update {
  update(id: number, updateProfileDto: UpdateProfileDto): Promise<Profiles>;
}
