import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public readonly navLinks = [
    {
      label: 'Dashboard',
      path: 'dashboard',
    },
    {
      label: 'Expenses',
      path: 'expenses',
    },
    {
      label: 'Profile',
      path: 'profile',
    },
  ];
}
