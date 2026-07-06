import { email, maxLength, required, SchemaPath } from '@angular/forms/signals';

export function emailValidators(path: SchemaPath<string>) {
  required(path, { message: 'Email field is required!' });
  email(path, { message: 'Email is invalid!' });
  maxLength(path, 100, { message: 'Email is too long!' });
}
