import { Component } from '@angular/core';

@Component({
  selector: 'app-wallets-carousel',
  imports: [],
  templateUrl: './wallets-carousel.html',
  styleUrl: './wallets-carousel.css',
})
export class WalletsCarousel {
  public readonly wallets = [
    {
      name: 'Cash',
      balance: 832.02,
      currency: 'EUR',
    },
    {
      name: 'Maib',
      balance: 832.02,
      currency: 'EUR',
    },
    {
      name: 'Revolut',
      balance: 832.02,
      currency: 'EUR',
    },
  ];
}
