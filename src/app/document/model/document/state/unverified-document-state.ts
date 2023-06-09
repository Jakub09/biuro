import { User } from '../../../../user/user';
import { Attachment } from '../../attachment';
import { Document } from '../document';
import { ActionNotAllowedInCurrentStateException } from '../exceptions/action-not-allowed-in-current-state.exception.ts';
import { DocumentState } from './document.state';
import { PendingDocumentState } from './pending-document-state';

export class UnverifiedDocumentState extends DocumentState {
  accept() {
    throw new Error('Method not implemented.');
  }
  setVerifiedByApplicant(applicant: User) {
    if (this.document.getApplicant().equals(applicant)) {
      this.document.setState(new PendingDocumentState(this.document));
    } else {
      throw new ActionNotAllowedInCurrentStateException(
        'The document can only be verified by the applicant!',
      );
    }
  }
  sendToApproval() {
    throw new Error('Method not implemented.');
  }
  addAttachment(attachment: Attachment) {
    throw new ActionNotAllowedInCurrentStateException('');
  }
}
