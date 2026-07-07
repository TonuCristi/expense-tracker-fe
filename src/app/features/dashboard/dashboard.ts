import { Component } from '@angular/core';

import { PageTitle } from '../../shared/ui/page-title/page-title';
import { WalletsCarousel } from './components/wallets-carousel/wallets-carousel';
import { AddWallet } from './components/add-wallet/add-wallet';
import { SpendingOverview } from './components/spending-overview/spending-overview';
import { TransactionCard } from './components/transaction-card/transaction-card';
import { TopSpendingCategories } from './components/top-spending-categories/top-spending-categories';

@Component({
  selector: 'app-dashboard',
  imports: [
    PageTitle,
    WalletsCarousel,
    AddWallet,
    SpendingOverview,
    TransactionCard,
    TopSpendingCategories,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
