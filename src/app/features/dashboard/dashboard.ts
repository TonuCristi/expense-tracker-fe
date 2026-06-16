import { Component } from '@angular/core';
import { PageTitle } from '../../shared/ui/page-title/page-title';
import { WalletsCarousel } from './components/wallets-carousel/wallets-carousel';
import { AddWalletButton } from './components/add-wallet-button/add-wallet-button';

@Component({
  selector: 'app-dashboard',
  imports: [PageTitle, WalletsCarousel, AddWalletButton],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
