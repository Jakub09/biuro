import { User } from 'src/app/user/user';
import { EmailAddress } from 'src/email/model/email-address';

export class CreateDocumentRequest {
  constructor(
    readonly content: string,
    readonly attachment: File,
    readonly applicantEmail: string,
    readonly department: string,
  ) {}
}
