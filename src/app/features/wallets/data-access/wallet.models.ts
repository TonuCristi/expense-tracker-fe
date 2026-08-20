import { Currency } from '../../../shared/models';

export interface Wallet {
  id: string;
  name: string;
  currency: Currency;
  balance: number;
  createdAt: string;
}

export interface AddWalletPayload extends Omit<Wallet, 'id' | 'createdAt'> {}

export interface EditWalletPayload extends Omit<Wallet, 'id' | 'createdAt'> {}

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
