import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DocumentCreatedEvent } from './document-created.event';

@EventsHandler(DocumentCreatedEvent)
export class DocumentCreatedHandler
  implements IEventHandler<DocumentCreatedEvent>
{
  handle(event: DocumentCreatedEvent): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
