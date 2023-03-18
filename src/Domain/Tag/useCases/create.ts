import { Tags } from '@prisma/client';
import { CreateTagDto } from 'src/Interface/Controller/Tag/create-tag.dto';

export default interface Create {
  create(createTagDto: CreateTagDto): Promise<Tags>;
}
