import { computed, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

import { User } from '../auth/auth.models';
import { Auth } from '../auth/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ user }) => ({ isAuthenticated: computed(() => !!user()) })),
  withMethods((store, authService = inject(Auth), router = inject(Router)) => ({
    getMe: rxMethod<void>(
      pipe(
        switchMap(() => {
          return authService.getMe().pipe(
            tapResponse({
              next: (user) => patchState(store, { user, isLoading: false }),
              error: (error: HttpErrorResponse) => {
                patchState(store, {
                  user: null,
                  isLoading: false,
                  error: error.error.message ?? 'Something went wrong!',
                });

                router.navigate(['/login']);
              },
            }),
          );
        }),
      ),
    ),
    logout: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return authService.logout().pipe(
            tapResponse({
              next: () => {
                patchState(store, { error: null, user: null, isLoading: false });
                router.navigate(['/login']);
              },
              error: () => patchState(store, { isLoading: false }),
            }),
          );
        }),
      ),
    ),
  })),
);
