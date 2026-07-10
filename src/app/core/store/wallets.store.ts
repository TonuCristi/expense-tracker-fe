import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

import { AddWalletPayload, Wallet } from '../wallets/wallet.models';
import { Wallets } from '../wallets/wallets';

interface AuthState {
  wallets: Wallet[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  wallets: [],
  isLoading: true,
  error: null,
};

export const WalletsStore = signalStore(
  withState(initialState),
  withMethods((store, walletsService = inject(Wallets), router = inject(Router)) => ({
    addWallet: rxMethod<AddWalletPayload>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((walletPayload) => {
          return walletsService.addWallet(walletPayload).pipe(
            tapResponse({
              next: (res) => {
                patchState(store, {
                  wallets: [...store.wallets(), res.wallet],
                  isLoading: false,
                  error: null,
                });
              },
              error: (error: HttpErrorResponse) => {
                patchState(store, {
                  isLoading: false,
                  error: error.error.message ?? 'Something went wrong!',
                });
              },
            }),
          );
        }),
      ),
    ),
    getWallets: rxMethod<void>(
      pipe(
        switchMap(() => {
          return walletsService.getWallets().pipe(
            tapResponse({
              next: (res) =>
                patchState(store, { wallets: res.wallets, isLoading: false, error: null }),
              error: () => {
                patchState(store, {
                  wallets: [],
                  isLoading: false,
                });
              },
            }),
          );
        }),
      ),
    ),
  })),
);
