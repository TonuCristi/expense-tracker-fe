import { Component, inject, input, linkedSignal, model } from '@angular/core';
import { form, maxLength, min, required, FormField, FormRoot } from '@angular/forms/signals';

import { Overlay } from '../../../../shared/ui/overlay/overlay';
import { Button } from '../../../../shared/ui/button/button';
import { Input } from '../../../../shared/ui/input/input';
import { WalletsStore } from '../../data-access/wallets.store';
import { CURRENCY_OPTIONS } from '../../../../shared/constants';
import { Currency } from '../../../../shared/models';
import { Wallet } from '../../data-access/wallet.models';

interface EditWalletFormModel {
  name: string;
  currency: Currency;
  balance: number;
}

@Component({
  selector: 'app-edit-wallet-form',
  imports: [Button, FormField, FormRoot, Overlay, Input],
  templateUrl: './edit-wallet-form.html',
  styleUrl: './edit-wallet-form.css',
})
export class EditWalletForm {
  public readonly wallet = input.required<Wallet>();

  public readonly walletsStore = inject(WalletsStore);

  public readonly isFormOpen = model<boolean>(false);

  public readonly currencyOptions = CURRENCY_OPTIONS;

  public readonly editWalletModel = linkedSignal<EditWalletFormModel>(() => ({
    name: this.wallet().name,
    currency: this.wallet().currency,
    balance: this.wallet().balance,
  }));

  public readonly editWalletForm = form(
    this.editWalletModel,
    (schemaPath) => {
      /* ----- Name validation ----- */
      required(schemaPath.name, { message: 'The name field is required!' });
      maxLength(schemaPath.name, 60, {
        message: "The name should't be longer than 60 characters!",
      });

      /* ----- Currency validation ----- */
      required(schemaPath.currency, { message: 'The currency field is required!' });

      /* ----- Balance validation ----- */
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
    this.walletsStore.editWallet({
      walletId: this.wallet().id,
      walletPayload: this.editWalletForm().value(),
    });
  }
}
