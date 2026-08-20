import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { WalletsStore } from '../../data-access/wallets.store';

@Component({
  selector: 'app-combined-balance',
  imports: [CurrencyPipe],
  templateUrl: './combined-balance.html',
  styleUrl: './combined-balance.css',
})
export class CombinedBalance {
  public readonly walletsStore = inject(WalletsStore);
}
