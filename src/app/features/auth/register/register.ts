import { Component, signal } from '@angular/core';
import { form, required, FormRoot, FormField, maxLength, email } from '@angular/forms/signals';

import { Button } from '../../../shared/ui/button/button';
import { RouterLink } from '@angular/router';

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
  imports: [FormRoot, FormField, Button, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  public readonly registerInputs = REGISTER_INPUTS;

  public readonly registerModel = signal<RegisterFormModel>({
    username: '',
    email: '',
    password: '',
  });

  public readonly registerForm = form(
    this.registerModel,
    (schemaPath) => {
      required(schemaPath.username, { message: 'Username field is required!' });
      maxLength(schemaPath.username, 100, { message: 'Username is too long!' });

      required(schemaPath.email, { message: 'Email field is required!' });
      email(schemaPath.email, { message: 'Email is invalid!' });
      maxLength(schemaPath.email, 100, { message: 'Email is too long!' });

      required(schemaPath.password, { message: 'Password field is required!' });
    },
    { submission: { action: () => this.submitForm() } },
  );

  private async submitForm() {
    console.log(this.registerInputs);
  }
}
