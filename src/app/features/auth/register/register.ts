import { Component, signal } from '@angular/core';
import { form, required, FormRoot, FormField } from '@angular/forms/signals';
import { Button } from '../../../shared/ui/button/button';
import { Input } from '../../../shared/ui/input/input';

interface RegisterFormModel {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  imports: [FormRoot, FormField, Button, Input],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  public registerModel = signal<RegisterFormModel>({
    username: '',
    email: '',
    password: '',
  });

  public registerForm = form(
    this.registerModel,
    (schemaPath) => {
      required(schemaPath.username, { message: 'Username field is requiered!' });
      required(schemaPath.email, { message: 'Email field is requiered!' });
      required(schemaPath.password, { message: 'Password field is requiered!' });
    },
    { submission: { action: this.submitForm } },
  );

  private async submitForm() {
    console.log('Registered!');
  }
}
