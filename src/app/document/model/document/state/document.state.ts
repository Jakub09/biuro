import { User } from '../../../../user/user';
import { Document } from '../document';
import { InvalidStateException } from '../exceptions/Invalid-state-exception';
import { PendingDocumentState } from './pending-document-state';

export abstract class DocumentState {
  protected document: Document;
  constructor(document: Document) {
    this.document = document;
  }
  abstract setVerifiedByApplicant(applicant: User);
  abstract sendToApproval();
  abstract accept();
}
