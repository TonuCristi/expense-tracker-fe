import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-switch-link',
  imports: [RouterLink],
  templateUrl: './auth-switch-link.html',
  styleUrl: './auth-switch-link.css',
})
export class AuthSwitchLink {
  public readonly prompt = input.required<string>();
  public readonly linkText = input.required<string>();
  public readonly route = input.required<string>();
}
