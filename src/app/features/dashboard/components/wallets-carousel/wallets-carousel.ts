import { Component, inject } from '@angular/core';

import { WalletsStore } from '../../../../core/store/wallets.store';

@Component({
  selector: 'app-wallets-carousel',
  imports: [],
  templateUrl: './wallets-carousel.html',
  styleUrl: './wallets-carousel.css',
})
export class WalletsCarousel {
  public readonly walletsStore = inject(WalletsStore);
}
