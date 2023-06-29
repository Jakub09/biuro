import { User } from 'src/app/user/user';

export class CreateDocumentRequest {
  readonly title: string;
  readonly content: string;
  readonly applicant: User;
}
