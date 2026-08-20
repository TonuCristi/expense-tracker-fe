import { Component } from '@angular/core';

import { PageTitle } from '../../shared/ui/page-title/page-title';
import { CombinedBalance } from './components/combined-balance/combined-balance';
import { WalletsList } from './components/wallets-list/wallets-list';
import { TransactionsTable } from '../transactions/components/transactions-table/transactions-table';
import { AddTransactionButton } from '../transactions/components/add-transaction-button/add-transaction-button';

@Component({
  selector: 'app-wallets',
  imports: [PageTitle, CombinedBalance, AddTransactionButton, TransactionsTable, WalletsList],
  templateUrl: './wallets.html',
  styleUrl: './wallets.css',
})
export class Wallets {}
