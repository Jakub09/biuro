import { EmailAdress } from 'src/email/model/email-address';

export class User {
  constructor(id: string, private readonly email: EmailAdress) {
    this.id = id;
  }
  id: string;
  equals(user: any): boolean {
    if (this.id === user.id) {
      return true;
    } else {
      return false;
    }
  }
}
