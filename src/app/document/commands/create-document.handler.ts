import { Applicant } from 'src/app/user/applicant';
import { DocumentFactory } from '../document.fatory';
import { CreateDocumentCommand } from './create-document.command';
import {
  CommandBus,
  CommandHandler,
  EventPublisher,
  ICommandHandler,
} from '@nestjs/cqrs';
import { ObjectId } from 'mongoose';
import { UserEntityRepository } from 'src/app/user/db/user-entity.repository';
import { EmailAddress } from 'src/email/model/email-address';
import { error } from 'console';

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
        new Applicant(' fdfd', new EmailAddress(applicantEmail)),
      ),
    );
    document.commit();
  }
}
