import { AggregateRoot } from '@nestjs/cqrs';
import { EmailAddress } from 'src/email/model/email-address';

export class User extends AggregateRoot {
  constructor(id: string, private readonly email: EmailAddress) {
    super();
    this.id = id;
  }
  id: string;
  getEmailAddress() {
    return this.email;
  }
  getId(): string {
    return this.id;
  }
  equals(user: any): boolean {
    if (this.id === user.id) {
      return true;
    } else {
      return false;
    }
  }
}
