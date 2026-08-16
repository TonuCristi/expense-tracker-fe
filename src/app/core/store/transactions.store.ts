import { signalStore, withState } from '@ngrx/signals';
import { Transaction } from '../transactions/transactions.models';

interface TransactionsState {
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TransactionsState = {
  transactions: [],
  isLoading: true,
  error: null,
};

export const TransactionsStore = signalStore(withState(initialState));
