import { ProfileFollows } from '@prisma/client';
import { CreateFollowDto } from 'src/Interface/Controller/Follow/create-follow.dto';

export default interface Create {
  create(createFollowDto: CreateFollowDto): Promise<ProfileFollows>;
}
