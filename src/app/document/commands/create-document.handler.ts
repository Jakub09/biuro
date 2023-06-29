import { DocumentFactory } from '../document.fatory';
import { CreateDocumentCommand } from './create-document.command';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateDocumentCommand)
export class CreateDocumentHandler
  implements ICommandHandler<CreateDocumentCommand>
{
  constructor(
    private readonly documentFactory: DocumentFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}
  async execute(command: CreateDocumentCommand): Promise<void> {
    const { title, applicant, content } = command.createDocumentReaquest;
    const document = this.eventPublisher.mergeObjectContext(
      await this.documentFactory.create(title, content, applicant),
    );
    document.commit();
  }
}
