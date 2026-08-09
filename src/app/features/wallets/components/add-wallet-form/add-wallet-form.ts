import { Component, inject, model, signal } from '@angular/core';
import { form, FormField, FormRoot, maxLength, min, required } from '@angular/forms/signals';

import { Button } from '../../../../shared/ui/button/button';
import { CURRENCY_OPTIONS } from '../../../../shared/constants';
import { Overlay } from '../../../../shared/ui/overlay/overlay';
import { WalletsStore } from '../../../../core/store/wallets.store';
import { Currency } from '../../../../shared/models';

interface AddWalletFormModel {
  name: string;
  currency: Currency;
  balance: number;
}

@Component({
  selector: 'app-add-wallet-form',
  imports: [Button, FormField, FormRoot, Overlay],
  templateUrl: './add-wallet-form.html',
  styleUrl: './add-wallet-form.css',
})
export class AddWalletForm {
  public readonly walletsStore = inject(WalletsStore);

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
