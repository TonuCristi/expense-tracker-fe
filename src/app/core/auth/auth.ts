import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthResponse, LoginPayload, RegisterPayload, User } from './auth.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly http = inject(HttpClient);

  public register(userPayload: RegisterPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, userPayload);
  }

  public login(userPayload: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, userPayload);
  }

  public getMe(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/auth/me`);
  }

  public logout(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/logout`, null);
  }
}
