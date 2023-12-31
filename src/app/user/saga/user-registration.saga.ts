import { Injectable } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import { UserEntityRepository } from '../db/user-entity.repository';
import { EmailAddress } from 'src/email/model/email-address';
import { Observable } from 'rxjs';

@Injectable()
export class UserRegistrationSaga {
  constructor(private userRepository: UserEntityRepository) {}

  @Saga()
  registrationPending = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(ofType());
  };

  isUserExists(email: EmailAddress): boolean {
    const user = this.userRepository.findByEmail(email);
    return user ? true : false;
  }
}
