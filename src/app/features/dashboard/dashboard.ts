import { Component } from '@angular/core';

import { PageTitle } from '../../shared/ui/page-title/page-title';
import { WalletsCarousel } from './components/wallets-carousel/wallets-carousel';
import { AddWallet } from './components/add-wallet/add-wallet';
import { LastTransactionsList } from './components/last-transactions-list/last-transactions-list';
import { TotalBalance } from './components/total-balance/total-balance';
import { SubscriptionsList } from './components/subscriptions-list/subscriptions-list';

@Component({
  selector: 'app-dashboard',
  imports: [
    PageTitle,
    WalletsCarousel,
    AddWallet,
    LastTransactionsList,
    TotalBalance,
    SubscriptionsList,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
