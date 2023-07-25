import { EntitySchemaFactory } from 'src/database/entity-schema.factory';
import { DocumentSchema } from './document.schema';
import { Document } from '../model/document/document';
import { ObjectId } from 'mongodb';

export class DocumentSchemaFactory
  implements EntitySchemaFactory<DocumentSchema, Document>
{
  create(entity: Document): DocumentSchema {
    return {
      _id: new ObjectId(entity.getId()),
      applicant: entity.getApplicant(),
      attachments: entity.getAttachments(),
      content: entity.getContent(),
      title: entity.getTitle(),
    };
  }
  createFromSchema(enitySchema: DocumentSchema): Document {
    return new Document(
      enitySchema.applicant,

      enitySchema._id.toHexString(),
    );
  }
}
