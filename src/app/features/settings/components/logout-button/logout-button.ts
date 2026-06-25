import { Component, inject } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { AuthStore } from '../../../../core/store/auth.store';

@Component({
  selector: 'app-logout-button',
  imports: [Button],
  templateUrl: './logout-button.html',
  styleUrl: './logout-button.css',
})
export class LogoutButton {
  public readonly authStore = inject(AuthStore);
}
