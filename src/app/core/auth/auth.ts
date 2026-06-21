import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginPayload, RegisterPayload, User } from './auth.models';
import { environment } from '../../../environments/environment.development';
import { AuthStore } from '../store/auth.store';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly http = inject(HttpClient);
  private readonly authStore = inject(AuthStore);

  public register(userPayload: RegisterPayload): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/register`, userPayload);
  }

  public login(userPayload: LoginPayload): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, userPayload);
  }
}
