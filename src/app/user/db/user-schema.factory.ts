import { EntitySchemaFactory } from 'src/database/entity-schema.factory';
import { UserSchema } from './user.schema';
import { User } from '../user';
import { ObjectId } from 'mongodb';
import { Applicant } from '../applicant';

export class UserFactory implements EntitySchemaFactory<UserSchema, User> {
  create(entity: User): UserSchema {
    return {
      _id: new ObjectId(entity.getId()),
      email: entity.getEmailAddress(),
    };
  }
  createFromSchema(enitySchema: UserSchema): User {
    return new User(enitySchema._id.toHexString(), enitySchema.email);
  }
}
