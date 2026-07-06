import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CanActivateFn, Router } from '@angular/router';
import { filter, map, take } from 'rxjs';

import { AuthStore } from '../store/auth.store';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  const decide = () => !authStore.isAuthenticated() || router.createUrlTree(['/']);

  if (authStore.isAuthChecked()) {
    return decide();
  }

  return toObservable(authStore.isAuthChecked).pipe(filter(Boolean), take(1), map(decide));
};
