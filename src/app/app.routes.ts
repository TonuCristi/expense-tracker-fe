import { Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main-layout/main-layout';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { authGuard } from './core/auth/auth-guard';
import { noAuthGuard } from './core/auth/noauth-guard';
import { WalletsStore } from './features/wallets/data-access/wallets.store';
import { WalletsApi } from './features/wallets/data-access/wallets-api';
import { TransactionsApi } from './features/transactions/data-access/transactions-api';
import { TransactionsStore } from './features/transactions/data-access/transactions.store';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    providers: [WalletsStore, WalletsApi, TransactionsStore, TransactionsApi],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes'),
        title: 'Dashboard',
      },
      {
        path: 'wallets',
        loadChildren: () => import('./features/wallets/wallets.routes'),
        title: 'Wallets',
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/settings/settings.routes'),
        title: 'Settings',
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    canActivate: [noAuthGuard],
    loadChildren: () => import('./features/auth/auth.routes'),
    title: 'Authentication',
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Not found',
  },
];
