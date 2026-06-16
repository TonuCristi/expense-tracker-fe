import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

type Route = 'dashboard' | 'wallets' | 'settings';

const PAGE_TITLES: Record<Route, string> = {
  dashboard: 'Dashboard',
  wallets: 'Wallets',
  settings: 'Settings',
};

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css',
})
export class PageTitle implements OnInit {
  private route = inject(Router);

  public title = signal<string>('');

  ngOnInit(): void {
    const currentRoute = this.route.url.split('/').filter((value) => value.length)[0] as Route;

    this.title.set(PAGE_TITLES[currentRoute]);
  }
}
