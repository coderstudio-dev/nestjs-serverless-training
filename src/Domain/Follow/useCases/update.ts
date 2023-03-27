import { ProfileFollows } from '@prisma/client';
import { UpdateFollowDto } from 'src/App/dto/Follow/update-follow.dto';

export default interface Update {
  update(id: number, updateFollowDto: UpdateFollowDto): Promise<ProfileFollows>;
}
