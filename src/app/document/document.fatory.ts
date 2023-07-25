import { Injectable } from '@nestjs/common';
import { EntityFactory } from 'src/database/entity.factory';
import { User } from '../user/user';
import { Document } from './model/document/document';
import { ObjectId } from 'mongodb';
import { DocumentCreatedEvent } from './events/document-created.event';
import { DocumentEntityRepository } from './db/document-entity.repository';

@Injectable()
export class DocumentFactory implements EntityFactory<Document> {
  constructor(
    private readonly documentEntityRepository: DocumentEntityRepository,
  ) {}
  async create(content: string, applicant: User): Promise<Document> {
    const newDocument = new Document(applicant, new ObjectId().toHexString());
    await this.documentEntityRepository.create(newDocument);
    newDocument.apply(new DocumentCreatedEvent(newDocument));
    return newDocument;
  }
}
