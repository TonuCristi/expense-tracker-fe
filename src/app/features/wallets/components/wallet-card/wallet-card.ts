import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Button } from '../../../../shared/ui/button/button';
import { Wallet } from '../../../../core/wallets/wallet.models';
import { getCurrencyLabel } from '../../../../shared/utils/string.utils';
import { DeleteWalletButton } from '../delete-wallet-button/delete-wallet-button';

@Component({
  selector: 'app-wallet-card',
  imports: [Button, CurrencyPipe, DeleteWalletButton],
  templateUrl: './wallet-card.html',
  styleUrl: './wallet-card.css',
})
export class WalletCard {
  public readonly wallet = input.required<Wallet>();

  public readonly currencyLabel = computed(() => getCurrencyLabel(this.wallet().currency));
}
