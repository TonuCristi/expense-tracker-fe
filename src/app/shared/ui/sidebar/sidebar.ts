import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  public readonly navLinks = [
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
}
