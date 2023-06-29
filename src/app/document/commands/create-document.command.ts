import { CreateDocumentRequest } from '../dto/requests/create-document.request';

export class CreateDocumentCommand {
  constructor(public readonly createDocumentReaquest: CreateDocumentRequest) {}
}
