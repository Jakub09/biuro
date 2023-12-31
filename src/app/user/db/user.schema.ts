import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/database/identifiable-entity.schema';
import { EmailAddress } from 'src/email/model/email-address';

@Schema()
export class UserSchema extends IdentifiableEntitySchema {
  @Prop()
  email: EmailAddress;
}
