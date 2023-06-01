export class User {
  constructor(id: string) {
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
