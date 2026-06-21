import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { User } from '../auth/auth.models';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    updateLoading(isLoading: boolean): void {
      patchState(store, () => ({
        isLoading,
      }));
    },
    updateUser(user: User): void {
      patchState(store, () => ({
        user,
      }));
    },
  })),
);
