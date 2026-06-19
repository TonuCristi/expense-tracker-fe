import { Component, signal } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { AddWalletForm } from '../add-wallet-form/add-wallet-form';

@Component({
  selector: 'app-add-wallet',
  imports: [Button, AddWalletForm],
  templateUrl: './add-wallet.html',
  styleUrl: './add-wallet.css',
})
export class AddWallet {
  public isFormOpen = signal<boolean>(false);

  public openForm() {
    this.isFormOpen.update((v) => !v);
  }
}
