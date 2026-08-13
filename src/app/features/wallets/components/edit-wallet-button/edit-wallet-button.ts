import { Component, input, signal } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { Wallet } from '../../../../core/wallets/wallet.models';
import { EditWalletForm } from '../edit-wallet-form/edit-wallet-form';

@Component({
  selector: 'app-edit-wallet-button',
  imports: [Button, EditWalletForm],
  templateUrl: './edit-wallet-button.html',
  styleUrl: './edit-wallet-button.css',
})
export class EditWalletButton {
  public readonly wallet = input.required<Wallet>();

  public readonly isFormOpen = signal<boolean>(false);

  public openForm() {
    this.isFormOpen.set(true);
  }
}
