import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class UserSchema {
  @Prop()
  email: string;
}
