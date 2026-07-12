import { CURRENCY_OPTIONS } from '../../shared/constants';

export type CURRENCY = (typeof CURRENCY_OPTIONS)[number]['value'];

export interface AddWalletPayload {
  name: string;
  currency: CURRENCY;
  balance: number;
}

export interface AddWalletResponse {
  wallet: Wallet;
  message: string;
}

export interface GetWalletsResponse {
  wallets: Wallet[];
}

export interface Wallet {
  id: string;
  name: string;
  currency: CURRENCY;
  balance: number;
  createdAt: string;
}
