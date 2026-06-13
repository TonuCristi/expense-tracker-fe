import { Routes } from '@angular/router';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
      },
      {
        path: 'expenses',
        loadChildren: () =>
          import('./features/expenses/expenses.routes').then((m) => m.expensesRoutes),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile.routes').then((m) => m.profileRoutes),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayout,
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
];
