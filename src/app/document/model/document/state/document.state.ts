import { User } from '../../../../user/user';
import { Attachment } from '../../attachment';
import { Document } from '../document';
import { ActionNotAllowedInCurrentStateException } from '../exceptions/action-not-allowed-in-current-state.exception.ts';
import { PendingDocumentState } from './pending-document-state';

export abstract class DocumentState {
  protected document: Document;
  constructor(document: Document) {
    this.document = document;
  }
  abstract setVerifiedByApplicant(applicant: User);
  abstract sendToApproval();
  abstract accept();
  abstract addAttachment(attachment: Attachment): void;
}
