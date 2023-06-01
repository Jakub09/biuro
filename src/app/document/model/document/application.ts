import { Attachment } from '../attachment';
import { User } from '../user/user';
import { DocumentState } from './state/document.state';

import { UnverifiedDocumentState } from './state/unverified-document-state';

export class Document {
  constructor(applicant: User) {
    this.documentState = new UnverifiedDocumentState(this);
    this.applicant = applicant;
  }
  private documentState: DocumentState;

  id: string;
  title: string;
  applicant: User;
  content: string;
  attachments: Attachment[];

  setVerifiedByApplicant(applicant: User) {
    this.documentState.setVerifiedByApplicant(applicant);
  }
  setState(state: DocumentState) {
    this.documentState = state;
  }
  getState() {
    return this.documentState;
  }

  addAttachment(att: Attachment) {}
  sendToApproval() {}
  accept() {}
  reject() {}
  cancel() {}
  sendToRequester() {}
  archive() {}
}
