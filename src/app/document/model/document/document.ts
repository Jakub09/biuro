import { Attachment } from '../attachment';
import { User } from '../../../user/user';
import { DocumentState } from './state/document.state';
import { AggregateRoot } from '@nestjs/cqrs';
import { UnverifiedDocumentState } from './state/unverified-document-state';

export class Document extends AggregateRoot {
  constructor(
    applicant: User,
    title: string,
    _id: string,
    content: string,
    attachments: Attachment[],
  ) {
    super();
    this.documentState = new UnverifiedDocumentState(this);
    this.applicant = applicant;
    this.attachments = attachments;
    this.content = content;
    this.title = title;
    this.id = _id;
  }

  private documentState: DocumentState;

  private readonly id: string;
  private title: string;
  private readonly applicant: User;
  private content: string;
  private attachments: Attachment[];

  setVerifiedByApplicant(applicant: User) {
    this.documentState.setVerifiedByApplicant(applicant);
  }
  setState(state: DocumentState) {
    this.documentState = state;
  }
  getState() {
    return this.documentState;
  }
  getId(): string {
    return this.id;
  }
  getAplicant(): User {
    return this.applicant;
  }
  getAttachments(): Attachment[] {
    return [...this.attachments];
  }
  getContent(): string {
    return this.content;
  }
  getTitle(): string {
    return this.title;
  }

  addAttachment(att: Attachment) {}
  sendToApproval() {}
  accept() {}
  reject() {}
  cancel() {}
  sendToRequester() {}
  archive() {}
}
