import { Component, inject, signal } from '@angular/core';
import {
  form,
  required,
  FormRoot,
  FormField,
  maxLength,
  minLength,
  pattern,
} from '@angular/forms/signals';

import { Button } from '../../../shared/ui/button/button';
import { AuthCard } from '../components/auth-card/auth-card';
import { AuthSwitchLink } from '../components/auth-switch-link/auth-switch-link';
import { AuthStore } from '../../../core/store/auth.store';
import { emailValidators } from '../../../shared/validators/email.validators';

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

  public readonly authStore = inject(AuthStore);

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
      emailValidators(schemaPath.email);

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
    this.authStore.register(this.registerForm().value());
  }
}
