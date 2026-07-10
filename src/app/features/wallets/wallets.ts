import { Component } from '@angular/core';

import { PageTitle } from '../../shared/ui/page-title/page-title';
import { CombinedBalance } from './components/combined-balance/combined-balance';
import { WalletCard } from './components/wallet-card/wallet-card';

@Component({
  selector: 'app-wallets',
  imports: [PageTitle, CombinedBalance, WalletCard],
  templateUrl: './wallets.html',
  styleUrl: './wallets.css',
})
export class Wallets {}
