import { Injectable } from '@nestjs/common';
import { DocumentSchema } from './document.schema';
import { Document } from '../model/document/document';
import { BaseEntityRepository } from 'src/database/base-entity.repository';
import { DocumentSchemaFactory } from './document-schema.factory';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class DocumentEntityRepository extends BaseEntityRepository<
  DocumentSchema,
  Document
> {
  constructor(
    @InjectModel(DocumentSchema.name) documentModel: Model<DocumentSchema>,
    documentSchemaFactory: DocumentSchemaFactory,
  ) {
    super(documentModel, documentSchemaFactory);
  }
}
