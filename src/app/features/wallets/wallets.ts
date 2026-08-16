import { Component } from '@angular/core';

import { PageTitle } from '../../shared/ui/page-title/page-title';
import { CombinedBalance } from './components/combined-balance/combined-balance';
import { AddTransactionButton } from './components/add-transaction-button/add-transaction-button';
import { TransactionsTable } from './components/transactions-table/transactions-table';
import { WalletsList } from './components/wallets-list/wallets-list';

@Component({
  selector: 'app-wallets',
  imports: [PageTitle, CombinedBalance, AddTransactionButton, TransactionsTable, WalletsList],
  templateUrl: './wallets.html',
  styleUrl: './wallets.css',
})
export class Wallets {}
