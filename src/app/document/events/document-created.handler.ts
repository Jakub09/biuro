import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DocumentCreatedEvent } from './document-created.event';
import { EmailService } from 'src/email/email.service';

@EventsHandler(DocumentCreatedEvent)
export class DocumentCreatedHandler
  implements IEventHandler<DocumentCreatedEvent>
{
  constructor(private emailService: EmailService) {}
  handle(event: DocumentCreatedEvent): Promise<void> {
    return this.emailService.sendEmailNotification(
      event.document.getApplicant().getEmailAddress(),
      'asdfasdf',
    );
  }
}
