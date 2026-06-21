import { Component, signal } from '@angular/core';
import {
  email,
  form,
  maxLength,
  minLength,
  pattern,
  required,
  FormRoot,
  FormField,
} from '@angular/forms/signals';

import { Button } from '../../../shared/ui/button/button';
import { AuthCard } from '../components/auth-card/auth-card';
import { AuthSwitchLink } from '../components/auth-switch-link/auth-switch-link';

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

  public readonly loginModel = signal<LoginFormModel>({
    email: '',
    password: '',
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
    console.log(this.loginInputs);
  }
}
