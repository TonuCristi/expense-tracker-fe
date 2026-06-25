import { Component, inject, signal } from '@angular/core';
import {
  form,
  required,
  FormRoot,
  FormField,
  maxLength,
  email,
  minLength,
  pattern,
} from '@angular/forms/signals';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError, finalize, of, tap } from 'rxjs';

import { Button } from '../../../shared/ui/button/button';
import { AuthCard } from '../components/auth-card/auth-card';
import { AuthSwitchLink } from '../components/auth-switch-link/auth-switch-link';
import { Auth } from '../../../core/auth/auth';

const REGISTER_INPUTS = [
  {
    id: 'username',
    label: 'Username',
    type: 'text',
    name: 'username',
    placeholder: 'Enter your username',
  },
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

interface RegisterFormModel {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  imports: [FormRoot, FormField, Button, AuthCard, AuthSwitchLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  public readonly registerInputs = REGISTER_INPUTS;

  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  public readonly isLoading = signal<boolean>(false);
  public readonly error = signal<string | null>(null);

  public readonly registerModel = signal<RegisterFormModel>({
    username: 'rest',
    email: 'rest@rest.rest',
    password: 'P@rola1234',
  });

  public readonly registerForm = form(
    this.registerModel,
    (schemaPath) => {
      /* ----- Username validation ----- */
      required(schemaPath.username, { message: 'Username field is required!' });
      maxLength(schemaPath.username, 100, { message: 'Username is too long!' });

      /* ----- Email validation ----- */
      required(schemaPath.email, { message: 'Email field is required!' });
      email(schemaPath.email, { message: 'Email is invalid!' });
      maxLength(schemaPath.email, 100, { message: 'Email is too long!' });

      /* ----- Password validation ----- */
      required(schemaPath.password, { message: 'Password field is required!' });
      minLength(schemaPath.password, 8, {
        message: 'Password must be at least 8 characters',
      });
      pattern(schemaPath.password, /[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      });
      pattern(schemaPath.password, /[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
      });
      pattern(schemaPath.password, /\d/, {
        message: 'Password must contain at least one number',
      });
      pattern(schemaPath.password, /[^A-Za-z0-9]/, {
        message: 'Password must contain at least one special character',
      });
    },
    { submission: { action: () => this.submitForm() } },
  );

  private async submitForm() {
    this.isLoading.set(true);

    this.authService
      .register(this.registerForm().value())
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
