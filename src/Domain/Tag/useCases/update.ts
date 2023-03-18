import { Tags } from '@prisma/client';
import { UpdateTagDto } from 'src/Interface/Controller/Tag/update-tag.dto';

export default interface Update {
  update(id: number, updateTagDto: UpdateTagDto): Promise<Tags>;
}
