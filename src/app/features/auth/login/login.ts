import { Component, inject, signal } from '@angular/core';
import { form, required, FormRoot, FormField, email, maxLength } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, finalize, of, tap } from 'rxjs';

import { Button } from '../../../shared/ui/button/button';
import { AuthCard } from '../components/auth-card/auth-card';
import { AuthSwitchLink } from '../components/auth-switch-link/auth-switch-link';
import { Auth } from '../../../core/auth/auth';

const LOGIN_INPUTS = [
  {
    id: 'email',
    label: 'Email',
    type: 'text',
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
  },
] as const;

interface LoginFormModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormRoot, FormField, Button, AuthCard, AuthSwitchLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public readonly loginInputs = LOGIN_INPUTS;

  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  public readonly isLoading = signal<boolean>(false);
  public readonly error = signal<string | null>(null);

  public readonly loginModel = signal<LoginFormModel>({
    email: 'rest@rest.rest',
    password: 'P@rola1234',
  });

  public readonly loginForm = form(
    this.loginModel,
    (schemaPath) => {
      /* ----- Email validation ----- */
      required(schemaPath.email, { message: 'Email field is required!' });
      email(schemaPath.email, { message: 'Email is invalid!' });
      maxLength(schemaPath.email, 100, { message: 'Email is too long!' });

      /* ----- Password validation ----- */
      required(schemaPath.password, { message: 'Password field is required!' });
    },
    { submission: { action: () => this.submitForm() } },
  );

  private async submitForm() {
    this.isLoading.set(true);

    this.authService
      .login(this.loginForm().value())
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.error.set(error.error.message ?? 'Something went wrong!');
          return of(null);
        }),
        tap((response) => {
          if (response) {
            this.router.navigate(['/']);
          }
        }),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe();
  }
}
