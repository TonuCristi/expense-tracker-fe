import { Component, model, signal } from '@angular/core';
import { Button } from '../../../../shared/ui/button/button';
import { form, FormField, FormRoot } from '@angular/forms/signals';

const ADD_WALLET_FORM_INPUTS = [
  { type: 'text', name: 'name', label: 'Name' },
  { type: 'text', name: 'currency', label: 'Currency' },
  { type: 'number', name: 'balance', label: 'Balance' },
];

interface AddWalletFormModel {
  name: string;
  currency: string;
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
    currency: 'EUR',
    balance: 0,
  });

  public readonly addWalletFormInputs = ADD_WALLET_FORM_INPUTS;

  public addWalletForm = form(this.addWalletModel, {
    submission: {
      action: this.submitForm,
    },
  });

  public closeForm() {
    this.isFormOpen.set(false);
  }

  public async submitForm() {
    console.log('Wallet added!');
  }
}
