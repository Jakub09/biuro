import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateDocumentRequest } from './dto/requests/create-document.request';
import { CreateDocumentCommand } from './commands/create-document.command';
import { DocumentEntityRepository } from './db/document-entity.repository';

@Controller('documents')
export class DocumentsController {
  constructor(private documentRepo:DocumentEntityRepository, private readonly commandBus: CommandBus) {}
  @Post()
  async createDocument(
    @Body() createDocumentRequest: CreateDocumentRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateDocumentCommand, void>(
      new CreateDocumentCommand(createDocumentRequest),
    );
  }
}
