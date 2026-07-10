import { Component, inject } from '@angular/core';

import { PageTitle } from '../../shared/ui/page-title/page-title';
import { CombinedBalance } from './components/combined-balance/combined-balance';
import { WalletCard } from './components/wallet-card/wallet-card';
import { AddWallet } from './components/add-wallet/add-wallet';
import { WalletsStore } from '../../core/store/wallets.store';

@Component({
  selector: 'app-wallets',
  imports: [PageTitle, CombinedBalance, WalletCard, AddWallet],
  templateUrl: './wallets.html',
  styleUrl: './wallets.css',
})
export class Wallets {
  public readonly walletsStore = inject(WalletsStore);
}
