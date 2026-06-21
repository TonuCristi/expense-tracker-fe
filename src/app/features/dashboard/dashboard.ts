import { Component } from '@angular/core';
import { PageTitle } from '../../shared/ui/page-title/page-title';
import { WalletsCarousel } from './components/wallets-carousel/wallets-carousel';
import { AddWallet } from './components/add-wallet/add-wallet';

@Component({
  selector: 'app-dashboard',
  imports: [PageTitle, WalletsCarousel, AddWallet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
