import { Component } from '@angular/core';
import { PageTitle } from '../../shared/ui/page-title/page-title';
import { WalletsCarousel } from './components/wallets-carousel/wallets-carousel';
import { AddWalletButton } from './components/add-wallet-button/add-wallet-button';
import { LastTransactionsList } from './components/last-transactions-list/last-transactions-list';
import { TotalBalance } from './components/total-balance/total-balance';
import { SubscriptionsList } from './components/subscriptions-list/subscriptions-list';

@Component({
  selector: 'app-dashboard',
  imports: [
    PageTitle,
    WalletsCarousel,
    AddWalletButton,
    LastTransactionsList,
    TotalBalance,
    SubscriptionsList,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
