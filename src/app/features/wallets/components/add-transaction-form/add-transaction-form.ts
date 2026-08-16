import { Component, inject, model, signal } from '@angular/core';
import { FormRoot, form } from '@angular/forms/signals';

import { Overlay } from '../../../../shared/ui/overlay/overlay';
import { Button } from '../../../../shared/ui/button/button';
import { WalletsStore } from '../../../../core/store/wallets.store';
import { Transaction } from '../../../../core/transactions/transactions.models';

interface AddTransactionFormModel extends Omit<Transaction, 'id' | 'walletId' | 'createdAt'> {
  date: string;
}

@Component({
  selector: 'app-add-transaction-form',
  imports: [Overlay, Button, FormRoot],
  templateUrl: './add-transaction-form.html',
  styleUrl: './add-transaction-form.css',
})
export class AddTransactionForm {
  public readonly walletsStore = inject(WalletsStore);

  public readonly isFormOpen = model<boolean>();

  public readonly transactionModel = signal<AddTransactionFormModel>({
    type: 'expense',
    amount: 0,
    currency: 'eur',
    category: 'groceries',
    date: '',
  });

  public readonly transactionForm = form(this.transactionModel);

  public closeForm() {
    this.isFormOpen.set(false);
  }
}
