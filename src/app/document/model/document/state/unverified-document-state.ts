import { User } from '../../user/user';
import { Document } from '../application';
import { InvalidStateException } from '../exceptions/Invalid-state-exception';
import { DocumentState } from './document.state';
import { PendingDocumentState } from './pending-document-state';

export class UnverifiedDocumentState extends DocumentState {
  setVerifiedByApplicant(applicant: User) {
    if (this.document.applicant.equals(applicant)) {
      this.document.setState(new PendingDocumentState(this.document));
    } else {
      throw new InvalidStateException(
        'The document can only be verified by the applicant!',
      );
    }
  }
  sendToApproval() {
    throw new Error('Method not implemented.');
  }
  accept() {
    throw new Error('Method not implemented.');
  }
}
