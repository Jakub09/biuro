import { Prop } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

export abstract class IndentifiableEntitySchema {
  @Prop()
  readonly _id: ObjectId;
}
