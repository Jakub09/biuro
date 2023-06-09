import { User } from '../../../user/user';
import { ActionNotAllowedInCurrentStateException } from './exceptions/action-not-allowed-in-current-state.exception.ts';
import { PendingDocumentState } from './state/pending-document-state';
import { Document } from './document';
import { UnverifiedDocumentState } from './state/unverified-document-state';
import { Attachment } from '../attachment';

describe('Document', () => {
  const applicant = new User('q', 'w');
  const document = new Document(
    applicant,
    'fsfdsf',
    'abc',
    'fsdfsa',
    new Array<Attachment>(),
  );
  const otherUser = new User('w', 'q');

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
