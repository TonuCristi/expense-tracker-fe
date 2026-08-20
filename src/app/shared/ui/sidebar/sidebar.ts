import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AuthStore } from '../../../core/store/auth.store';
import { InitialsPipe } from '../../pipes/initials-pipe';

const NAV_LINKS = [
  {
    label: 'Dashboard',
    path: 'dashboard',
    iconClass: 'pi pi-objects-column',
  },
  {
    label: 'Wallets',
    path: 'wallets',
    iconClass: 'pi pi-wallet',
  },
  {
    label: 'Settings',
    path: 'settings',
    iconClass: 'pi pi-cog',
  },
];

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, InitialsPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  public readonly navLinks = NAV_LINKS;

  public readonly authStore = inject(AuthStore);
}
