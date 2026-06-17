import { Component, signal } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { AddWalletForm } from '../add-wallet-form/add-wallet-form';

@Component({
  selector: 'app-add-wallet-button',
  imports: [Button, AddWalletForm],
  templateUrl: './add-wallet-button.html',
  styleUrl: './add-wallet-button.css',
})
export class AddWalletButton {
  public isFormOpen = signal<boolean>(false);

  public openForm() {
    this.isFormOpen.update((v) => !v);
  }
}
