import { Component, inject, signal } from '@angular/core';
import { form, required, FormRoot, FormField } from '@angular/forms/signals';

import { Button } from '../../../shared/ui/button/button';
import { Input } from '../../../shared/ui/input/input';
import { AuthCard } from '../components/auth-card/auth-card';
import { AuthSwitchLink } from '../components/auth-switch-link/auth-switch-link';
import { AuthStore } from '../../../core/store/auth.store';
import { emailValidators } from '../../../shared/validators/email.validators';

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
  imports: [FormRoot, FormField, Button, AuthCard, AuthSwitchLink, Input],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public readonly loginInputs = LOGIN_INPUTS;

  public readonly authStore = inject(AuthStore);

  public readonly loginModel = signal<LoginFormModel>({
    email: 'tcg@tcgb.tcgb',
    password: 'Tonu2002@',
  });

  public readonly loginForm = form(
    this.loginModel,
    (schemaPath) => {
      /* ----- Email validation ----- */
      emailValidators(schemaPath.email);

      /* ----- Password validation ----- */
      required(schemaPath.password, { message: 'Password field is required!' });
    },
    { submission: { action: () => this.submitForm() } },
  );

  private async submitForm() {
    this.authStore.login(this.loginForm().value());
  }
}
