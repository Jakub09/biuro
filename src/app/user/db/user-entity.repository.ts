import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseEntityRepository } from 'src/database/base-entity.repository';
import { UserSchema } from './user.schema';
import { User } from '../user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserFactory } from './user-schema.factory';
import { EmailAddress } from 'src/email/model/email-address';

@Injectable()
export class UserEntityRepository extends BaseEntityRepository<
  UserSchema,
  User
> {
  constructor(
    @InjectModel(UserSchema.name) documentModel: Model<UserSchema>,
    documentSchemaFactory: UserFactory,
  ) {
    super(documentModel, documentSchemaFactory);
  }
  async findByEmail(email: EmailAddress): Promise<User> {
    const user = await this.entityModel.findOne({ email: EmailAddress }).exec();
    if (user) {
      return this.entitySchemaFactory.createFromSchema(user);
    } else {
      throw new NotFoundException('user not found!');
    }
  }
}
