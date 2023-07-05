import { User } from '../../../../user/user';
import { Attachment } from '../../attachment';
import { Document } from '../document';
import { ActionNotAllowedInCurrentStateException } from '../exceptions/action-not-allowed-in-current-state.exception.ts';
import { PendingDocumentState } from './pending-document-state';

describe('unverified document state', () => {
  const applicant = new User('q', 'q');
  const document = new Document(
    applicant,
    'fsfdsf',
    'abc',
    'fsdfsa',
    new Array<Attachment>(),
  );
  const otherUser = new User('w', 'q');

  describe('setVerifiedByApplicant', () => {
    it('does not allow to be verified by other users', () => {
      expect(() => document.setVerifiedByApplicant(otherUser)).toThrowError(
        new ActionNotAllowedInCurrentStateException(
          'The document can only be verified by the applicant!',
        ),
      );
    });

    it('sets document state to pending when verified by applicant', () => {
      document.setVerifiedByApplicant(applicant);

      expect(document.getState()).toEqual(new PendingDocumentState(document));
    });
  });
});
