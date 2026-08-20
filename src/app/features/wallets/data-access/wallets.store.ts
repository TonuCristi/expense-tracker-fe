import { computed, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';

import { AddWalletPayload, EditWalletParams, Wallet } from './wallet.models';
import { WalletsApi } from './wallets-api';

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
  withComputed(({ wallets }) => ({
    walletsCount: computed(() => wallets().length),
    combinedBalance: computed(() => wallets().reduce((acc, wallet) => acc + wallet.balance, 0)),
  })),
  withMethods((store, walletsApi = inject(WalletsApi)) => ({
    addWallet: rxMethod<AddWalletPayload>(
      pipe(
        tap(() => patchState(store, { isMutating: true })),
        switchMap((walletPayload) => {
          return walletsApi.addWallet(walletPayload).pipe(
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
    editWallet: rxMethod<EditWalletParams>(
      pipe(
        tap(() => patchState(store, { isMutating: true })),
        switchMap(({ walletId, walletPayload }: EditWalletParams) => {
          return walletsApi.editWallet(walletId, walletPayload).pipe(
            tapResponse({
              next: () => {
                patchState(store, {
                  isMutating: false,
                  wallets: store.wallets().map((wallet) =>
                    wallet.id === walletId
                      ? {
                          ...wallet,
                          name: walletPayload.name,
                          currency: walletPayload.currency,
                          balance: walletPayload.balance,
                        }
                      : wallet,
                  ),
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
          return walletsApi.deleteWallet(walletId).pipe(
            tapResponse({
              next: () => {
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
          return walletsApi.getWallets().pipe(
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
