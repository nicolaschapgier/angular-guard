import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  login(): Observable<boolean> {
    return of(false).pipe(delay(3000));
  }

  private role: string = 'USER';

  getRole(): string {
    return this.role;
  }
}
