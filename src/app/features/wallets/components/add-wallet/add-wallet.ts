import { Component, signal } from '@angular/core';

import { AddWalletForm } from '../add-wallet-form/add-wallet-form';

@Component({
  selector: 'app-add-wallet',
  imports: [AddWalletForm],
  templateUrl: './add-wallet.html',
  styleUrl: './add-wallet.css',
})
export class AddWallet {
  public readonly isFormOpen = signal<boolean>(false);

  public openForm() {
    this.isFormOpen.update((v) => !v);
  }
}
