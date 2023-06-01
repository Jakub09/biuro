import { User } from '../../user/user';

import { Document } from '../application';
import { DocumentState } from './document.state';

export class PendingDocumentState extends DocumentState {
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
