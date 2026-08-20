import { Component, computed, inject, model, signal } from '@angular/core';
import { FormRoot, form, FormField, required, maxLength, min } from '@angular/forms/signals';
import { NgClass } from '@angular/common';

import { Overlay } from '../../../../shared/ui/overlay/overlay';
import { Button } from '../../../../shared/ui/button/button';
import { Transaction } from '../../data-access/transactions.models';
import { CURRENCY_OPTIONS } from '../../../../shared/constants';
import {
  TRANSACTION_CATEGORY_OPTIONS,
  TRANSACTION_TYPE_OPTIONS,
} from '../../data-access/transactions.constants';
import { Input } from '../../../../shared/ui/input/input';
import { WalletsStore } from '../../../wallets/data-access/wallets.store';

interface AddTransactionFormModel extends Omit<Transaction, 'id'> {}

@Component({
  selector: 'app-add-transaction-form',
  imports: [Overlay, Button, FormRoot, FormField, Input, NgClass],
  templateUrl: './add-transaction-form.html',
  styleUrl: './add-transaction-form.css',
})
export class AddTransactionForm {
  public readonly walletsStore = inject(WalletsStore);

  public readonly isFormOpen = model<boolean>();

  public readonly typeOptions = TRANSACTION_TYPE_OPTIONS;

  public readonly currencyOptions = CURRENCY_OPTIONS;

  public readonly categoryOptions = TRANSACTION_CATEGORY_OPTIONS;

  public readonly walletOptions = computed(() =>
    this.walletsStore.wallets().map((wallet) => ({ label: wallet.name, value: wallet.id })),
  );

  public readonly transactionModel = signal<AddTransactionFormModel>({
    type: 'expense',
    amount: 0,
    currency: 'eur',
    category: 'groceries',
    note: '',
    date: this.getToday(),
    walletId: this.walletOptions()[0].value,
  });

  public readonly transactionForm = form(
    this.transactionModel,
    (schemaPath) => {
      /* ----- Type validation ----- */
      required(schemaPath.type, { message: 'The type field is required!' });

      /* ----- Amount validation ----- */
      min(schemaPath.amount, 0, { message: 'The amount must be at least 0!' });

      /* ----- Currency validation ----- */
      required(schemaPath.currency, { message: 'The currency field is required!' });

      /* ----- Category validation ----- */
      required(schemaPath.category, { message: 'The category field is required!' });

      /* ----- Note validation ----- */
      maxLength(schemaPath.note, 300, {
        message: "The note should't be longer than 300 characters!",
      });

      /* ----- Date validation ----- */
      maxLength(schemaPath.date, 300, {
        message: 'The date field is required!',
      });

      /* ----- Wallet validation ----- */
      required(schemaPath.walletId, { message: 'The wallet field is required!' });
    },
    {
      submission: {
        action: () => this.submitForm(),
      },
    },
  );

  public closeForm() {
    this.isFormOpen.set(false);
  }

  private async submitForm() {
    console.log(this.transactionForm().value());
  }

  private getToday(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
