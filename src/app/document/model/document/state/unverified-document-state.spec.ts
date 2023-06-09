import { User } from '../../../../user/user';
import { Document } from '../document';
import { InvalidStateException } from '../exceptions/Invalid-state-exception';
import { PendingDocumentState } from './pending-document-state';

describe('unverified document state', () => {
  const applicant = new User('q');
  const document = new Document(applicant);
  const otherUser = new User('w');

  describe('setVerifiedByApplicant', () => {
    it('does not allow to be verified by other users', () => {
      expect(() => document.setVerifiedByApplicant(otherUser)).toThrowError(
        new InvalidStateException(
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
