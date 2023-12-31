import { RegisterUserRequest } from '../dto/request/user-registration.request';

export class RegisterUserCommand {
  constructor(public readonly registerUserRequest: RegisterUserRequest) {}
}
