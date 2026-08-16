import { Currency } from '../../shared/models';
import { TRANSACTION_CATEGORY_OPTIONS } from './transactions.constants';

export type TransactionCategory = (typeof TRANSACTION_CATEGORY_OPTIONS)[number]['value'];

export type TransactionType = 'expense' | 'income';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  currency: Currency;
  category: TransactionCategory;
  walletId: string;
  date: string;
}
