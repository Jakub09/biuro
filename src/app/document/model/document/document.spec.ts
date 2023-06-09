import { User } from '../../../user/user';
import { InvalidStateException } from './exceptions/Invalid-state-exception';
import { PendingDocumentState } from './state/pending-document-state';
import { Document } from './document';
import { UnverifiedDocumentState } from './state/unverified-document-state';

describe('Document', () => {
  const applicant = new User('q');
  const document = new Document(applicant);
  const otherUser = new User('w');

  describe('new Document', () => {
    it('creates new document with unverified state', () => {
      expect(document.getState() instanceof UnverifiedDocumentState).toBe(true);
    });

    it('sets document state to pending when verified by applicant', () => {
      document.setVerifiedByApplicant(applicant);

      expect(document.getState()).toEqual(new PendingDocumentState(document));
    });
  });
});
