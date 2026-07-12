import { Component, input } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { Wallet } from '../../../../core/wallets/wallet.models';

@Component({
  selector: 'app-wallet-card',
  imports: [Button],
  templateUrl: './wallet-card.html',
  styleUrl: './wallet-card.css',
})
export class WalletCard {
  public readonly wallet = input.required<Wallet>();
}
