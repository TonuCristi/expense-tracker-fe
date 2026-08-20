import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { getCurrencyLabel } from '../../../../shared/utils/string.utils';
import { DeleteWalletButton } from '../delete-wallet-button/delete-wallet-button';
import { EditWalletButton } from '../edit-wallet-button/edit-wallet-button';
import { InitialsPipe } from '../../../../shared/pipes/initials-pipe';
import { Wallet } from '../../data-access/wallet.models';

@Component({
  selector: 'app-wallet-card',
  imports: [CurrencyPipe, DeleteWalletButton, EditWalletButton, InitialsPipe],
  templateUrl: './wallet-card.html',
  styleUrl: './wallet-card.css',
})
export class WalletCard {
  public readonly wallet = input.required<Wallet>();

  public readonly currencyLabel = computed(() => getCurrencyLabel(this.wallet().currency));
}
