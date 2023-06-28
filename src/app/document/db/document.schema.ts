import { Prop, Schema } from '@nestjs/mongoose';
import { User } from 'src/app/user/user';
import { IdentifiableEntitySchema } from 'src/database/identifiable-entity.schema';
import { Attachment } from '../model/attachment';
@Schema()
export class DocumentSchema extends IdentifiableEntitySchema {
  @Prop()
  title: string;
  @Prop()
  applicant: User;
  @Prop()
  content: string;
  @Prop()
  attachments: Attachment[];
}
