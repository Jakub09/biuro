import { User } from 'src/app/user/user';
import { EmailAdress } from 'src/email/model/email-address';

export class CreateDocumentRequest {
  readonly title: string;
  readonly content: string;
  readonly applicantEmail: EmailAdress;
}
