import { Component, inject, model, signal } from '@angular/core';
import { form, FormField, FormRoot, maxLength, min, required } from '@angular/forms/signals';

import { Button } from '../../../../shared/ui/button/button';
import { CURRENCY } from '../../../../core/wallets/wallet.models';
import { CURRENCY_OPTIONS } from '../../../../shared/constants';
import { WalletsStore } from '../../../../core/store/wallets.store';

interface AddWalletFormModel {
  name: string;
  currency: CURRENCY;
  balance: number;
}

@Component({
  selector: 'app-add-wallet-form',
  imports: [Button, FormField, FormRoot],
  templateUrl: './add-wallet-form.html',
  styleUrl: './add-wallet-form.css',
})
export class AddWalletForm {
  private readonly walletsStore = inject(WalletsStore);

  public readonly isFormOpen = model<boolean>(false);

  public readonly currencyOptions = CURRENCY_OPTIONS;

  public readonly addWalletModel = signal<AddWalletFormModel>({
    name: '',
    currency: 'eur',
    balance: 0,
  });

  public readonly addWalletForm = form(
    this.addWalletModel,
    (schemaPath) => {
      required(schemaPath.name, { message: 'The name field is required!' });
      maxLength(schemaPath.name, 60, {
        message: "The name should't be longer than 60 characters!",
      });

      required(schemaPath.currency, { message: 'The currency field is required!' });

      // required(schemaPath.balance, { message: 'Balance field is required!' });
      min(schemaPath.balance, 0, { message: 'The balance must be at least 0!' });
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
    this.walletsStore.addWallet(this.addWalletForm().value());
  }
}
