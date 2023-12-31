export class EmailAddress {
  constructor(private email: string) {}
  toString(): string {
    return this.email;
  }
}
