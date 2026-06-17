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
      balance: 1250.5,
      currency: 'EUR',
    },
    {
      name: 'Nova Bank',
      balance: 8420.75,
      currency: 'USD',
    },
    {
      name: 'Atlas Financial',
      balance: 15600.0,
      currency: 'MDL',
    },
    {
      name: 'Vertex Bank',
      balance: 3240.9,
      currency: 'RON',
    },
    {
      name: 'Revolut',
      balance: 980.35,
      currency: 'EUR',
    },
    {
      name: 'Cobalt Bank',
      balance: 4575.2,
      currency: 'USD',
    },
    {
      name: 'Pioneer Trust',
      balance: 28750.0,
      currency: 'MDL',
    },
    {
      name: 'Silverline',
      balance: 6900.45,
      currency: 'RON',
    },
    {
      name: 'Zenith Wallet',
      balance: 320.15,
      currency: 'EUR',
    },
    {
      name: 'Summit Bank',
      balance: 11200.8,
      currency: 'USD',
    },
  ];
}
