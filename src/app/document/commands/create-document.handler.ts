import { Applicant } from 'src/app/user/applicant';
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
    const { attachment, department, applicantEmail, content } =
      command.createDocumentReaquest;

    const document = this.eventPublisher.mergeObjectContext(
      await this.documentFactory.create(
        content,
        new Applicant('ff', applicantEmail),
      ),
    );
    document.commit();
  }
}
