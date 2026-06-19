import { Component, model, signal } from '@angular/core';
import { form, FormField, FormRoot, maxLength, min, required } from '@angular/forms/signals';

import { Button } from '../../../../shared/ui/button/button';

import { CURRENCY } from '../../dashboard.models';
import { CURRENCY_OPTIONS } from '../../dashboard.constants';

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
  public isFormOpen = model<boolean>(false);

  public addWalletModel = signal<AddWalletFormModel>({
    name: '',
    currency: 'eur',
    balance: 0,
  });

  public readonly currencyOptions = CURRENCY_OPTIONS;

  public addWalletForm = form(
    this.addWalletModel,
    (schemaPath) => {
      required(schemaPath.name, { message: 'Name field is required!' });
      maxLength(schemaPath.name, 60, { message: 'The name is too long!' });

      required(schemaPath.currency, { message: 'Currency field is required!' });

      required(schemaPath.balance, { message: 'Balance field is required!' });
      min(schemaPath.balance, 0, { message: 'Balance must be at least 0!' });
    },
    {
      submission: {
        action: this.submitForm,
      },
    },
  );

  public closeForm() {
    this.isFormOpen.set(false);
  }

  private async submitForm() {
    console.log('Wallet added!');
  }
}
