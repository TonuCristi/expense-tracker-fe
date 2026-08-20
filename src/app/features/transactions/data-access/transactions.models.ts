import { Currency } from '../../../shared/models';
import { TRANSACTION_CATEGORY_OPTIONS, TRANSACTION_TYPE_OPTIONS } from './transactions.constants';

export type TransactionCategory = (typeof TRANSACTION_CATEGORY_OPTIONS)[number]['value'];

export type TransactionType = (typeof TRANSACTION_TYPE_OPTIONS)[number]['value'];

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  currency: Currency;
  category: TransactionCategory;
  note: string;
  date: string;
  walletId: string;
}

export interface AddTransactionPayload extends Omit<Transaction, 'id'> {}

export interface AddTransactionResponse extends MessageResponse {
  transaction: Transaction;
}

export interface MessageResponse {
  message: string;
}

export interface GetTransactionsResponse {
  transactions: Transaction[];
}
