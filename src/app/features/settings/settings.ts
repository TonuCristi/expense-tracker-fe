import { Component } from '@angular/core';
import { LogoutButton } from './components/logout-button/logout-button';

@Component({
  selector: 'app-settings',
  imports: [LogoutButton],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {}
