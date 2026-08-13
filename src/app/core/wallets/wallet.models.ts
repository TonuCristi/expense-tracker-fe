import { Currency } from '../../shared/models';

export interface AddWalletPayload {
  name: string;
  currency: Currency;
  balance: number;
}

export interface EditWalletPayload {
  name: string;
  currency: Currency;
  balance: number;
}

export interface EditWalletParams {
  walletId: string;
  walletPayload: EditWalletPayload;
}

export interface EditWalletParams {
  walletId: string;
  walletPayload: EditWalletPayload;
}

export interface AddWalletResponse extends MessageResponse {
  wallet: Wallet;
}

export interface MessageResponse {
  message: string;
}

export interface GetWalletsResponse {
  wallets: Wallet[];
}

export interface Wallet {
  id: string;
  name: string;
  currency: Currency;
  balance: number;
  createdAt: string;
}
