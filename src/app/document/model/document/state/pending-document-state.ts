import { User } from '../../../../user/user';
import { Attachment } from '../../attachment';

import { Document } from '../document';
import { DocumentState } from './document.state';

export class PendingDocumentState extends DocumentState {
  addAttachment(attachment: Attachment): void {
    throw new Error('Method not implemented.');
  }
  setVerifiedByApplicant(applicant: User) {
    throw new Error('The document has already been verified by the applicant.');
  }
  sendToApproval() {
    throw new Error('Method not implemented.');
  }
  accept() {
    throw new Error('Method not implemented.');
  }
}
