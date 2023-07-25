import { Document } from '../model/document/document';

export class DocumentCreatedEvent {
  constructor(public readonly document: Document) {}
}
