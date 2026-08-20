import { Component, inject, input, signal } from '@angular/core';

import { Button } from '../../../../shared/ui/button/button';
import { WalletsStore } from '../../data-access/wallets.store';
import { ConfirmationModal } from '../../../../shared/ui/confirmation-modal/confirmation-modal';

@Component({
  selector: 'app-delete-wallet-button',
  imports: [Button, ConfirmationModal],
  templateUrl: './delete-wallet-button.html',
  styleUrl: './delete-wallet-button.css',
})
export class DeleteWalletButton {
  public readonly walletId = input.required<string>();

  public readonly walletsStore = inject(WalletsStore);

  public readonly isConfirmationModalOpen = signal<boolean>(false);

  public openConfirmationModal() {
    this.isConfirmationModalOpen.set(true);
  }

  public closeConfirmationModal() {
    this.isConfirmationModalOpen.set(false);
  }
}
