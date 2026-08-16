import { Component, inject } from '@angular/core';

import { WalletsStore } from '../../../../core/store/wallets.store';
import { WalletCard } from '../wallet-card/wallet-card';
import { AddWalletButton } from '../add-wallet-button/add-wallet-button';

@Component({
  selector: 'app-wallets-list',
  imports: [WalletCard, AddWalletButton],
  templateUrl: './wallets-list.html',
  styleUrl: './wallets-list.css',
})
export class WalletsList {
  public readonly walletsStore = inject(WalletsStore);
}
