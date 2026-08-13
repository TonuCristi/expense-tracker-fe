import { Component, signal } from '@angular/core';

import { AddWalletForm } from '../add-wallet-form/add-wallet-form';

@Component({
  selector: 'app-add-wallet-button',
  imports: [AddWalletForm],
  templateUrl: './add-wallet-button.html',
  styleUrl: './add-wallet-button.css',
})
export class AddWalletButton {
  public readonly isFormOpen = signal<boolean>(false);

  public openForm() {
    this.isFormOpen.update((v) => !v);
  }
}
