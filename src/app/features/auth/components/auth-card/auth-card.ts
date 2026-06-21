import { Component, input } from '@angular/core';

@Component({
  selector: 'app-auth-card',
  imports: [],
  templateUrl: './auth-card.html',
  styleUrl: './auth-card.css',
})
export class AuthCard {
  public readonly title = input.required<string>();
  public readonly subtitle = input.required<string>();
}
