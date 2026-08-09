import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

import { AddWalletPayload, Wallet } from '../wallets/wallet.models';
import { Wallets } from '../wallets/wallets';

interface WalletsState {
  wallets: Wallet[];
  isLoading: boolean;
  isMutating: boolean;
  error: string | null;
}

const initialState: WalletsState = {
  wallets: [],
  isLoading: true,
  isMutating: false,
  error: null,
};

export const WalletsStore = signalStore(
  withState(initialState),
  withMethods((store, walletsService = inject(Wallets)) => ({
    addWallet: rxMethod<AddWalletPayload>(
      pipe(
        tap(() => patchState(store, { isMutating: true })),
        switchMap((walletPayload) => {
          return walletsService.addWallet(walletPayload).pipe(
            tapResponse({
              next: (res) => {
                patchState(store, {
                  wallets: [...store.wallets(), res.wallet],
                  isMutating: false,
                  error: null,
                });
              },
              error: (error: HttpErrorResponse) => {
                patchState(store, {
                  isMutating: false,
                  error: error.error.message ?? 'Something went wrong!',
                });
              },
            }),
          );
        }),
      ),
    ),
    deleteWallet: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isMutating: true })),
        switchMap((walletId: string) => {
          return walletsService.deleteWallet(walletId).pipe(
            tapResponse({
              next: () => {
                console.log(store.wallets());
                patchState(store, {
                  wallets: store.wallets().filter((wallet) => wallet.id !== walletId),
                  isMutating: false,
                });
              },
              error: (error: HttpErrorResponse) => {
                patchState(store, {
                  isMutating: false,
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
              next: (res) => {
                patchState(store, { wallets: res.wallets, isLoading: false, error: null });
              },
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
