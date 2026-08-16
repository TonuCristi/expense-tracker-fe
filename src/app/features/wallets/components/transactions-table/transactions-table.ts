import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transactions-table',
  imports: [CurrencyPipe],
  templateUrl: './transactions-table.html',
  styleUrl: './transactions-table.css',
})
export class TransactionsTable {}
