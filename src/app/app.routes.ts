import { Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main-layout/main-layout';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { authGuard } from './core/auth/auth-guard';
import { noAuthGuard } from './core/auth/noauth-guard';
import { WalletsStore } from './core/store/wallets.store';
import { Wallets } from './core/wallets/wallets';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    providers: [WalletsStore, Wallets],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
      },
      {
        path: 'wallets',
        loadChildren: () =>
          import('./features/wallets/wallets.routes').then((m) => m.walletsRoutes),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.routes').then((m) => m.settingsRoutes),
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    canActivate: [noAuthGuard],
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
];
