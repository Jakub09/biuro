import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DocumentsController } from './documents.controller';
import { DocumentEntityRepository } from './db/document-entity.repository';
import { DocumentFactory } from './document.fatory';
import { DocumentSchemaFactory } from './db/document-schema.factory';
import { DocumentEventsHandlers } from './events';
import { DocumentCommandHandlers } from './commands';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { DocumentSchema } from './db/document.schema';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: DocumentSchema.name,
        schema: SchemaFactory.createForClass(DocumentSchema),
      },
    ]),
  ],
  controllers: [DocumentsController],
  providers: [
    DocumentEntityRepository,
    DocumentFactory,
    DocumentSchemaFactory,
    ...DocumentEventsHandlers,
    ...DocumentCommandHandlers,
  ],
})
export class DocumetnsModule {}
