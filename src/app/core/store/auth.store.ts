import { computed, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

import { LoginPayload, RegisterPayload, User } from '../auth/auth.models';
import { Auth } from '../auth/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthChecked: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthChecked: false,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ user }) => ({ isAuthenticated: computed(() => !!user()) })),
  withMethods((store, authService = inject(Auth), router = inject(Router)) => ({
    register: rxMethod<RegisterPayload>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((userPayload) => {
          return authService.register(userPayload).pipe(
            tapResponse({
              next: (res) => {
                patchState(store, { user: res.user, isLoading: false, error: null });
                router.navigate(['/']);
              },
              error: (error: HttpErrorResponse) => {
                patchState(store, {
                  user: null,
                  isLoading: false,
                  error: error.error.message ?? 'Something went wrong!',
                });
              },
            }),
          );
        }),
      ),
    ),
    login: rxMethod<LoginPayload>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((userPayload) => {
          return authService.login(userPayload).pipe(
            tapResponse({
              next: (res) => {
                patchState(store, { user: res.user, isLoading: false, error: null });
                router.navigate(['/']);
              },
              error: (error: HttpErrorResponse) => {
                patchState(store, {
                  user: null,
                  isLoading: false,
                  error: error.error.message ?? 'Something went wrong!',
                });
              },
            }),
          );
        }),
      ),
    ),
    getMe: rxMethod<void>(
      pipe(
        switchMap(() => {
          return authService.getMe().pipe(
            tapResponse({
              next: (user) => patchState(store, { user, isAuthChecked: true }),
              error: () => {
                patchState(store, {
                  user: null,
                  isAuthChecked: true,
                });
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
