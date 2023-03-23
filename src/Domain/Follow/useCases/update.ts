import { ProfileFollows } from '@prisma/client';
import { UpdateFollowDto } from 'src/Interface/Controller/Follow/update-follow.dto';

export default interface Update {
  update(id: number, updateFollowDto: UpdateFollowDto): Promise<ProfileFollows>;
}
