import { EmailAddress } from 'src/email/model/email-address';

export class User {
  constructor(id: string, private readonly email: EmailAddress) {
    this.id = id;
  }
  id: string;
  getEmailAddress() {
    return this.email;
  }
  equals(user: any): boolean {
    if (this.id === user.id) {
      return true;
    } else {
      return false;
    }
  }
}
